const characterData = {
    jamie: {
        name: 'Jamie Cole',
        kicker: 'ORIGINAL CHARACTER · 01',
        sheet: 'images/原創角色/Jamie Cole/Jamie Cole.png',
        facts: [
            ['年齡', '20 歲・大二'],
            ['身高', '164 cm'],
            ['性別', '未明言，外型與氣質中性'],
            ['主修', '平面設計'],
            ['偏差體', '中度偏差體']
        ],
        sections: [
            {
                title: '外貌特徵',
                paragraphs: [
                    '褐色自然捲中短髮，層次及後頸，中分並露出耳朵。平時穿著咖啡色短皮外套、長白 T、紅格襯衫綁腰、灰綠工裝褲與高筒帆布鞋。',
                    '臉與身上貼滿便利貼，內容寫著「別任性」、「要更努力」、「別讓人失望」、「今天不可以哭」等自我壓抑的話。只有 Silas 能清楚看見便利貼上的字。'
                ]
            },
            {
                title: '性格',
                paragraphs: [
                    '過度迎合、深層自卑，害怕失去認可；不擅表達真實感受，即使壓力沉重也不輕易發洩。',
                    '外表沉靜而有距離感，內心其實混亂且渴望被理解。表面上抗拒 Silas，卻從未真正把他趕走。'
                ]
            },
            {
                title: '角色小檔案',
                paragraphs: [
                    '很怕冷，繫在腰上的襯衫是以備不時之需；骨子裡其實有些毒舌，特別是面對 Silas 時。',
                    '朋友比自己想像的多，也常有人來找他傾訴。他在校外租屋，會向房東借廚房煮飯省錢。',
                    '筆電貼著各式設計貼紙，包括寫著「禁止停筆」的三角錐、以「睡眠不足」設計的字體，以及直屬學妹 Molly 做的設計系玩笑貼紙。'
                ]
            }
        ]
    },
    molly: {
        name: 'Molly Turner',
        kicker: 'ORIGINAL CHARACTER · 02',
        sheet: 'images/原創角色/Molly Turner/Molly Turner.png',
        facts: [
            ['年齡', '19 歲・大一'],
            ['身高', '148 cm'],
            ['性別', '女'],
            ['主修', '平面設計；副修 2D 動畫'],
            ['偏差體', '輕度偏差體']
        ],
        sections: [
            {
                title: '外貌特徵',
                paragraphs: [
                    '淡金色中長髮綁成低雙馬尾，像小包包頭，髮尾留出一小截；有紫色眼睛、一口鯊魚牙，身形瘦小。',
                    '和雙胞胎姊妹幾乎長得一樣，兩人互相以名字稱呼，不區分誰大誰小；姊妹是重度偏差體。她的血液呈 #7c37ff 色水彩狀。',
                    '外套別著自己設計的刺繡徽章，裡面穿白色平口小背心與灰色假兩件牛仔短褲。'
                ]
            },
            {
                title: '性格',
                paragraphs: [
                    '開朗、有活力、朋友很多，是帶動氣氛的開心果；想法天馬行空，常做些出人意料的事，但和大家之間總像隔著一層透明的距離。',
                    '遇到事情時會從因果脈絡冷靜分析，觀察力意外敏銳。直言不諱，但只針對自己看見並認定的事情。',
                    '非常憧憬 Jamie 的作品，總是不吝表達喜愛，因此互動中帶著尊敬；也很討厭 Silas，會直接嫌他站在那裡就是多餘的。'
                ]
            },
            {
                title: '角色小檔案',
                paragraphs: [
                    '很怕熱，穿著寬大的外套是為了通風，也避免露出太多身體；特別喜歡三角錐和聖誕樹，還把它們畫成外套上的刺繡徽章。',
                    '住在學校附屬女子宿舍，和另外三位室友同住。房間東西很多，卻意外整齊。',
                    '論作品感染力與實力其實遠勝 Jamie；但在作品傳遞的情感與觀眾共鳴上，反而輸了好幾輪。'
                ]
            }
        ]
    }
};

const characterDialog = document.getElementById('character-dialog');
const characterName = document.getElementById('character-name');
const characterKicker = document.getElementById('character-kicker');
const characterFacts = document.getElementById('character-facts');
const characterSections = document.getElementById('character-sections');
const characterSheet = document.getElementById('character-sheet-image');
let lastCharacterTrigger;

function selectCharacter(characterId) {
    const character = characterData[characterId];

    if (!character) {
        return;
    }

    characterName.textContent = character.name;
    characterKicker.textContent = character.kicker;
    characterSheet.src = character.sheet;
    characterSheet.alt = `${character.name} 角色設定圖`;
    characterFacts.replaceChildren(...character.facts.flatMap(([label, value]) => {
        const term = document.createElement('dt');
        const description = document.createElement('dd');
        term.textContent = label;
        description.textContent = value;
        return [term, description];
    }));
    characterSections.replaceChildren(...character.sections.map(({ title, paragraphs }) => {
        const section = document.createElement('section');
        const heading = document.createElement('h4');
        heading.textContent = title;
        section.append(heading, ...paragraphs.map((text) => {
            const paragraph = document.createElement('p');
            paragraph.textContent = text;
            return paragraph;
        }));
        return section;
    }));
}

document.querySelectorAll('.character-open').forEach((trigger) => {
    trigger.addEventListener('click', () => {
        lastCharacterTrigger = trigger;
        selectCharacter(trigger.dataset.character);

        if (!characterDialog.open) {
            characterDialog.showModal();
        }
    });
});

const showcaseSlides = [
    {
        src: 'images/原創角色/Molly Turner/Molly Turner2.png',
        alt: 'Molly Turner 原創角色插畫',
        category: 'ORIGINAL CHARACTER',
        name: 'Molly Turner'
    },
    {
        src: 'images/原創角色/Jamie Cole/Jamie Cole2.jpg',
        alt: 'Jamie Cole 原創角色設計',
        category: 'ORIGINAL CHARACTER',
        name: 'Jamie Cole'
    },
    {
        src: 'images/二創/Re從零開始的異世界生活4.png',
        alt: 'Re:從零開始的異世界生活二創插畫',
        category: 'FAN ART · RE:ZERO',
        name: '異世界生活'
    },
    {
        src: 'images/二創/失憶投捕.jpg',
        alt: '失憶投捕二創插畫',
        category: 'FAN ART · OBLIVION BATTERY',
        name: '失憶投捕'
    }
];

const showcase = document.querySelector('.hero-art');
const showcaseImage = document.getElementById('hero-showcase-image');
const showcaseCategory = document.getElementById('hero-showcase-category');
const showcaseName = document.getElementById('hero-showcase-name');
const showcaseDots = [...document.querySelectorAll('.showcase-dot')];
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
let activeSlide = 0;
let showcaseTimer;
let showcaseTransitionTimer;

function showSlide(index) {
    activeSlide = (index + showcaseSlides.length) % showcaseSlides.length;
    window.clearTimeout(showcaseTransitionTimer);
    showcaseImage.classList.add('is-changing');

    showcaseTransitionTimer = window.setTimeout(() => {
        const slide = showcaseSlides[activeSlide];

        showcaseImage.src = slide.src;
        showcaseImage.alt = slide.alt;
        showcaseCategory.textContent = slide.category;
        showcaseName.textContent = slide.name;
        showcaseDots.forEach((dot, dotIndex) => {
            dot.setAttribute('aria-pressed', String(dotIndex === activeSlide));
        });
        window.requestAnimationFrame(() => showcaseImage.classList.remove('is-changing'));
    }, prefersReducedMotion.matches ? 0 : 200);
}

function stopShowcase() {
    window.clearInterval(showcaseTimer);
    showcaseTimer = undefined;
}

function startShowcase() {
    stopShowcase();

    if (prefersReducedMotion.matches || document.hidden || showcase.matches(':hover') || showcase.contains(document.activeElement)) {
        return;
    }

    showcaseTimer = window.setInterval(() => showSlide(activeSlide + 1), 5000);
}

showcase.querySelector('#showcase-previous').addEventListener('click', () => {
    showSlide(activeSlide - 1);
    startShowcase();
});

showcase.querySelector('#showcase-next').addEventListener('click', () => {
    showSlide(activeSlide + 1);
    startShowcase();
});

showcaseDots.forEach((dot) => {
    dot.addEventListener('click', () => {
        showSlide(Number(dot.dataset.slide));
        startShowcase();
    });
});

showcase.addEventListener('mouseenter', stopShowcase);
showcase.addEventListener('mouseleave', startShowcase);
showcase.addEventListener('focusin', stopShowcase);
showcase.addEventListener('focusout', (event) => {
    if (!showcase.contains(event.relatedTarget)) {
        startShowcase();
    }
});

document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        stopShowcase();
    } else {
        startShowcase();
    }
});

prefersReducedMotion.addEventListener('change', startShowcase);
startShowcase();

document.querySelector('.dialog-close').addEventListener('click', () => characterDialog.close());

characterDialog.addEventListener('click', (event) => {
    if (event.target === characterDialog) {
        characterDialog.close();
    }
});

characterDialog.addEventListener('close', () => {
    lastCharacterTrigger?.focus();
});

const fanartDialog = document.getElementById('fanart-dialog');
const animationDialog = document.getElementById('animation-dialog');
const animationPlayer = document.getElementById('animation-player');
const animationTitle = document.getElementById('animation-title');
const animationNote = document.getElementById('animation-note');
const animationCoverImage = document.getElementById('animation-cover-image');
const animationChoices = [...document.querySelectorAll('.animation-choice')];
const animationWorks = [
    { title: 'Re:從零開始的異世界生活', src: 'video/Re從零開始的異世界生活.mp4', poster: 'images/animation-poster.jpg' },
    { title: 'Re:從零開始的異世界生活・短篇', src: 'video/Re從零開始的異世界生活2.mp4', poster: 'images/二創/Re從零開始的異世界生活2.png' }
];
const collectionTriggers = new Map();

function openCollection(dialog, trigger) {
    collectionTriggers.set(dialog, trigger);

    if (!dialog.open) {
        dialog.showModal();
    }
}

function closeCollection(dialog) {
    dialog.close();
}

for (const dialog of [fanartDialog, animationDialog]) {
    dialog.querySelector('.collection-close').addEventListener('click', () => closeCollection(dialog));
    dialog.addEventListener('click', (event) => {
        if (event.target === dialog) {
            closeCollection(dialog);
        }
    });
    dialog.addEventListener('close', () => collectionTriggers.get(dialog)?.focus());
}

document.querySelector('.fanart-cover').addEventListener('click', (event) => {
    openCollection(fanartDialog, event.currentTarget);
});

document.querySelector('.animation-cover').addEventListener('click', (event) => {
    openCollection(animationDialog, event.currentTarget);
    if (!animationPlayer.src) {
        selectAnimation(0);
    }
});

function selectAnimation(index) {
    const work = animationWorks[index];

    animationPlayer.pause();
    animationPlayer.src = work.src;
    animationPlayer.load();
    animationPlayer.setAttribute('aria-label', `${work.title}二創動畫試看`);
    animationTitle.textContent = work.title;
    animationNote.textContent = '使用控制列播放、暫停或拖曳預覽。';
    animationChoices.forEach((choice, choiceIndex) => {
        choice.setAttribute('aria-pressed', String(choiceIndex === index));
    });
}

animationChoices.forEach((choice) => {
    choice.addEventListener('click', () => selectAnimation(Number(choice.dataset.animation)));
});

animationPlayer.addEventListener('error', () => {
    animationNote.textContent = '影片無法播放，請確認影片檔案是否存在或瀏覽器是否支援 MP4。';
    animationNote.setAttribute('role', 'status');
});

animationDialog.addEventListener('close', () => {
    animationPlayer.pause();
    animationPlayer.removeAttribute('src');
    animationPlayer.load();
});

function captureVideoPoster(index) {
    const work = animationWorks[index];
    const video = document.createElement('video');
    video.muted = true;
    video.playsInline = true;
    video.preload = 'metadata';

    video.addEventListener('loadedmetadata', () => {
        if (Number.isFinite(video.duration) && video.duration > 0) {
            video.currentTime = Math.min(1, video.duration);
        }
    }, { once: true });

    video.addEventListener('seeked', () => {
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        context.drawImage(video, 0, 0, canvas.width, canvas.height);
        const frame = canvas.toDataURL('image/jpeg', 0.84);

        document.querySelectorAll(`[data-video-poster="${index}"]`).forEach((image) => {
            image.src = frame;
            image.alt = `${work.title}影片第 1 秒畫面封面`;
        });

        if (index === 0) {
            animationCoverImage.src = frame;
            animationCoverImage.alt = `${work.title}影片第 1 秒畫面封面`;
        }

        video.removeAttribute('src');
        video.load();
    }, { once: true });

    video.addEventListener('error', () => {
        if (index === 0) {
            animationNote.textContent = '無法擷取影片封面，請確認影片檔案是否存在。';
            animationNote.setAttribute('role', 'status');
        }
        video.removeAttribute('src');
        video.load();
    }, { once: true });

    video.src = work.src;
    video.load();
}

animationWorks.forEach((_, index) => captureVideoPoster(index));
