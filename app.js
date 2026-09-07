const consonants = [
  { letter: "ㄱ", roman: "g", hint: "舌根抵住口腔后部；近似提示 g/k" },
  { letter: "ㄲ", roman: "kk", hint: "现代紧音；口腔后部更紧，不是重复读两个“ㄱ”" },
  { letter: "ㄴ", roman: "n", hint: "舌尖轻触上齿龈；近似提示 n" },
  { letter: "ㄷ", roman: "d", hint: "舌尖碰上齿龈；近似提示 d/t" },
  { letter: "ㄸ", roman: "tt", hint: "现代紧音；舌尖位置更紧、更短，不是重复读两个“ㄷ”" },
  { letter: "ㄹ", roman: "r", hint: "舌尖在齿龈附近轻弹；近似提示 r" },
  { letter: "ㅁ", roman: "m", hint: "双唇合上，让声音从鼻腔出来；近似提示 m" },
  { letter: "ㅂ", roman: "b", hint: "双唇先合再打开；近似提示 b/p" },
  { letter: "ㅃ", roman: "pp", hint: "现代紧音；双唇更紧、更短，不是重复读两个“ㅂ”" },
  { letter: "ㅅ", roman: "s", hint: "气流从牙齿附近穿过；近似提示 s" },
  { letter: "ㅆ", roman: "ss", hint: "现代紧音；牙齿附近气流更紧，不是重复读两个“ㅅ”" },
  { letter: "ㅇ", roman: "", hint: "开头时喉部安静不发音；收音时才表示 ng" },
  { letter: "ㅈ", roman: "j", hint: "由 ㅅ 加笔的字形关系；近似提示 j" },
  { letter: "ㅉ", roman: "jj", hint: "现代紧音；比 ㅈ 更紧、更短，不是重复读两个“ㅈ”" },
  { letter: "ㅊ", roman: "ch", hint: "由 ㅈ 再加笔；送气更明显，近似提示 ch" },
  { letter: "ㅋ", roman: "k", hint: "由 ㄱ 加笔；送气更明显，近似提示 k" },
  { letter: "ㅌ", roman: "t", hint: "由 ㄷ 加笔；送气更明显，近似提示 t" },
  { letter: "ㅍ", roman: "p", hint: "由 ㅂ 加笔；送气更明显，近似提示 p" },
  { letter: "ㅎ", roman: "h", hint: "喉部呼气；近似提示 h" },
];

const vowels = [
  { letter: "ㅏ", roman: "a", hint: "近似“啊”" },
  { letter: "ㅐ", roman: "ae", hint: "初学先按“ae”拼写区分；现代实际读音常接近 ㅔ" },
  { letter: "ㅑ", roman: "ya", hint: "接近“呀”的起音" },
  { letter: "ㅒ", roman: "yae", hint: "初学先按“yae”拼写区分；现代实际读音常接近 ㅖ" },
  { letter: "ㅓ", roman: "eo", hint: "嘴微张，介于“哦 / 啊”之间" },
  { letter: "ㅔ", roman: "e", hint: "初学先按“e”拼写区分；现代实际读音常接近 ㅐ" },
  { letter: "ㅕ", roman: "yeo", hint: "接近“哟”的起音，但不是普通汉语拼音 yo" },
  { letter: "ㅖ", roman: "ye", hint: "接近“耶”的起音；初学先按拼写区分" },
  { letter: "ㅗ", roman: "o", hint: "接近“哦”，嘴唇略圆" },
  { letter: "ㅘ", roman: "wa", hint: "接近“哇”的起音" },
  { letter: "ㅙ", roman: "wae", hint: "初学先按“wae”拼写区分" },
  { letter: "ㅚ", roman: "oe", hint: "初学先按“oe”拼写区分；现代实际读音可能接近其他组合元音" },
  { letter: "ㅛ", roman: "yo", hint: "接近“哟”的起音" },
  { letter: "ㅜ", roman: "u", hint: "接近“乌”" },
  { letter: "ㅝ", roman: "wo", hint: "接近“窝”的圆唇起音" },
  { letter: "ㅞ", roman: "we", hint: "初学先按“we”拼写区分" },
  { letter: "ㅟ", roman: "wi", hint: "接近“wi”的连读起音" },
  { letter: "ㅠ", roman: "yu", hint: "接近“yu”的起音" },
  { letter: "ㅡ", roman: "eu", hint: "扁平放松地发，中文没有完全对应音" },
  { letter: "ㅢ", roman: "ui", hint: "初学先按“ui”看；实际读法会随位置变化" },
  { letter: "ㅣ", roman: "i", hint: "接近“衣”" },
];

const tenseConsonantLetters = new Set(["ㄲ", "ㄸ", "ㅃ", "ㅆ", "ㅉ"]);
const compoundVowelLetters = new Set(["ㅐ", "ㅒ", "ㅔ", "ㅖ", "ㅘ", "ㅙ", "ㅚ", "ㅝ", "ㅞ", "ㅟ", "ㅢ"]);
const baseConsonants = consonants.filter((item) => !tenseConsonantLetters.has(item.letter));
const tenseConsonants = consonants.filter((item) => tenseConsonantLetters.has(item.letter));
const baseVowels = vowels.filter((item) => !compoundVowelLetters.has(item.letter));
const compoundVowels = vowels.filter((item) => compoundVowelLetters.has(item.letter));
const syllableBase = 0xac00;
const learnedStorageKey = "hangul-starter-learned";
const hangulInitialIndexes = {
  "ㄱ": 0,
  "ㄲ": 1,
  "ㄴ": 2,
  "ㄷ": 3,
  "ㄸ": 4,
  "ㄹ": 5,
  "ㅁ": 6,
  "ㅂ": 7,
  "ㅃ": 8,
  "ㅅ": 9,
  "ㅆ": 10,
  "ㅇ": 11,
  "ㅈ": 12,
  "ㅉ": 13,
  "ㅊ": 14,
  "ㅋ": 15,
  "ㅌ": 16,
  "ㅍ": 17,
  "ㅎ": 18,
};
const hangulVowelIndexes = {
  "ㅏ": 0,
  "ㅐ": 1,
  "ㅑ": 2,
  "ㅒ": 3,
  "ㅓ": 4,
  "ㅔ": 5,
  "ㅕ": 6,
  "ㅖ": 7,
  "ㅗ": 8,
  "ㅘ": 9,
  "ㅙ": 10,
  "ㅚ": 11,
  "ㅛ": 12,
  "ㅜ": 13,
  "ㅝ": 14,
  "ㅞ": 15,
  "ㅟ": 16,
  "ㅠ": 17,
  "ㅡ": 18,
  "ㅢ": 19,
  "ㅣ": 20,
};
const hangulFinalIndexes = {
  "": 0, "ㄱ": 1, "ㄲ": 2, "ㄳ": 3, "ㄴ": 4, "ㄵ": 5, "ㄶ": 6, "ㄷ": 7,
  "ㄹ": 8, "ㄺ": 9, "ㄻ": 10, "ㄼ": 11, "ㄽ": 12, "ㄾ": 13, "ㄿ": 14, "ㅀ": 15,
  "ㅁ": 16, "ㅂ": 17, "ㅄ": 18, "ㅅ": 19, "ㅆ": 20, "ㅇ": 21, "ㅈ": 22, "ㅊ": 23,
  "ㅋ": 24, "ㅌ": 25, "ㅍ": 26, "ㅎ": 27,
};
const finalConsonants = [
  { letter: "", label: "无", roman: "", hint: "不加收音" },
  { letter: "ㄱ", label: "ㄱ", roman: "k", hint: "代表收音" },
  { letter: "ㄴ", label: "ㄴ", roman: "n", hint: "代表收音" },
  { letter: "ㄷ", label: "ㄷ", roman: "t", hint: "代表收音" },
  { letter: "ㄹ", label: "ㄹ", roman: "l", hint: "代表收音" },
  { letter: "ㅁ", label: "ㅁ", roman: "m", hint: "代表收音" },
  { letter: "ㅂ", label: "ㅂ", roman: "p", hint: "代表收音" },
  { letter: "ㅇ", label: "ㅇ", roman: "ng", hint: "代表收音" },
];
const baseConsonantCards = document.querySelector("#base-consonant-cards");
const tenseConsonantCards = document.querySelector("#tense-consonant-cards");
const baseVowelCards = document.querySelector("#base-vowel-cards");
const compoundVowelCards = document.querySelector("#compound-vowel-cards");
const consonantSelector = document.querySelector("#consonant-selector");
const vowelSelector = document.querySelector("#vowel-selector");
const finalSelector = document.querySelector("#final-selector");
const syllableOutput = document.querySelector("#syllable");
const romanizationOutput = document.querySelector("#romanization");
const finalConsonantOutput = document.querySelector("#final-consonant");
const pronunciationTip = document.querySelector("#pronunciation-tip");
const selectionStatus = document.querySelector("#selection-status");
const progressCount = document.querySelector("#progress-count");
const headerProgress = document.querySelector("#header-progress");
const learningProgress = document.querySelector("#learning-progress");
const progressStatus = document.querySelector("#progress-status");
const practiceTarget = document.querySelector("#practice-target");
const practiceGuide = document.querySelector("#practice-guide");
const practiceAlternativeTarget = document.querySelector("#practice-alternative-target");
const startListeningButton = document.querySelector("#start-listening");
const stopListeningButton = document.querySelector("#stop-listening");
const retryListeningButton = document.querySelector("#retry-listening");
const newPracticeButton = document.querySelector("#new-practice");
const playPronunciationButton = document.querySelector("#play-pronunciation");
const speechSupport = document.querySelector("#speech-support");
const speechSynthesisStatus = document.querySelector("#speech-synthesis-status");
const letterSpeechStatus = document.querySelector("#letter-speech-status");
const speechResult = document.querySelector("#speech-result");
const speechFeedback = document.querySelector("#speech-feedback");

let selectedConsonant = consonants[0];
let selectedVowel = vowels[0];
let selectedFinal = finalConsonants[0];
let learnedLetters = new Set(loadLearnedLetters());
let quiz = [];
let quizIndex = 0;
let score = 0;
let questionAnswered = false;
const practicePrompts = [
  { target: "가", guide: "慢慢读：ga" },
  { target: "까", guide: "慢慢读：kka（紧音，不是两个“ㄱ”）" },
  { target: "나", guide: "慢慢读：na" },
  { target: "다", guide: "慢慢读：da" },
  { target: "따", guide: "慢慢读：tta（紧音，不是两个“ㄷ”）" },
  { target: "라", guide: "慢慢读：ra" },
  { target: "마", guide: "慢慢读：ma" },
  { target: "바", guide: "慢慢读：ba" },
  { target: "빠", guide: "慢慢读：ppa（紧音，不是两个“ㅂ”）" },
  { target: "사", guide: "慢慢读：sa" },
  { target: "싸", guide: "慢慢读：ssa（紧音，不是两个“ㅅ”）" },
  { target: "아", guide: "慢慢读：a（开头的 ㅇ 不发音）" },
  { target: "자", guide: "慢慢读：ja" },
  { target: "짜", guide: "慢慢读：jja（紧音，不是两个“ㅈ”）" },
  { target: "차", guide: "慢慢读：cha" },
  { target: "카", guide: "慢慢读：ka" },
  { target: "타", guide: "慢慢读：ta" },
  { target: "파", guide: "慢慢读：pa" },
  { target: "하", guide: "慢慢读：ha" },
  { target: "너", guide: "慢慢读：neo" },
  { target: "모", guide: "慢慢读：mo" },
  { target: "수", guide: "慢慢读：su" },
  { target: "이", guide: "慢慢读：i" },
  { target: "와", guide: "慢慢读：wa（组合元音 ㅘ）" },
  { target: "각", guide: "慢慢读：gak（收音 ㄱ；先看拼写组合）" },
  { target: "난", guide: "慢慢读：nan（收音 ㄴ；先看拼写组合）" },
];
const SpeechRecognitionConstructor = window.SpeechRecognition || window.webkitSpeechRecognition;
let practiceIndex = -1;
let recognition;
let recognitionState = "idle";
const neutralVowel = vowels.find((item) => item.letter === "ㅡ");
const silentInitial = consonants.find((item) => item.letter === "ㅇ");

function isSecureSpeechContext() {
  return window.isSecureContext;
}

function loadLearnedLetters() {
  try {
    const stored = JSON.parse(localStorage.getItem(learnedStorageKey));
    return Array.isArray(stored) ? stored : [];
  } catch {
    return [];
  }
}

function saveLearnedLetters() {
  localStorage.setItem(learnedStorageKey, JSON.stringify([...learnedLetters]));
}

function makeSyllable(consonant, vowel, final = selectedFinal) {
  const consonantIndex = hangulInitialIndexes[consonant.letter];
  const vowelIndex = hangulVowelIndexes[vowel.letter];
  const finalIndex = hangulFinalIndexes[final.letter];
  return String.fromCharCode(syllableBase + ((consonantIndex * 21 + vowelIndex) * 28) + finalIndex);
}

function romanize(consonant, vowel, final = selectedFinal) {
  const onset = consonant.letter === "ㅅ" && vowel.letter === "ㅣ" ? "sh" : consonant.roman;
  return `${onset}${vowel.roman}${final.roman}`;
}

function buildLetterCard(item, type) {
  const card = document.createElement("article");
  const isLearned = learnedLetters.has(item.letter);
  card.className = type === "tense" ? "letter-card tense-card" : "letter-card";
  if (isLearned) card.classList.add("is-learned");
  card.dataset.letter = item.letter;
  const example = getLetterExample(item, type);
  const exampleExplanation = type === "vowel"
    ? "前置 ㅇ 在开头无声，所以听到的是元音"
    : "用 ㅡ 垫出的示例音，不是孤立辅音的唯一读法";
  card.innerHTML = `
    <button class="learn-letter" type="button" aria-pressed="${isLearned}" aria-label="${item.letter}，${item.roman || "音节开头不发音"}。${isLearned ? "已学会" : "标记为已学会"}">
      <span class="letter-symbol" lang="ko">${item.letter}</span>
      <span class="letter-meta">
        <b>近似：${item.roman || "起首无声"}</b>
        <span>${item.hint}</span>
      </span>
    </button>
    <button class="letter-sound-button" type="button" aria-label="听 ${item.letter} 的示例音 ${example}">
      <span aria-hidden="true">◖</span> 听 <span lang="ko">${example}</span>
    </button>
    <span class="letter-example-note">${exampleExplanation}</span>
  `;
  card.querySelector(".learn-letter").addEventListener("click", () => toggleLearned(item.letter));
  card.querySelector(".letter-sound-button").addEventListener("click", () => {
    speakKorean(example, `${item.letter} 的示例音“${example}”`);
  });
  return card;
}

function renderLetterCards() {
  baseConsonantCards.replaceChildren(...baseConsonants.map((item) => buildLetterCard(item, "consonant")));
  tenseConsonantCards.replaceChildren(...tenseConsonants.map((item) => buildLetterCard(item, "tense")));
  baseVowelCards.replaceChildren(...baseVowels.map((item) => buildLetterCard(item, "vowel")));
  compoundVowelCards.replaceChildren(...compoundVowels.map((item) => buildLetterCard(item, "vowel")));
  updateSpeechSynthesisSupport();
}

function getLetterExample(item, type) {
  return type === "vowel"
    ? makeSyllable(silentInitial, item, finalConsonants[0])
    : makeSyllable(item, neutralVowel, finalConsonants[0]);
}

function toggleLearned(letter) {
  if (learnedLetters.has(letter)) {
    learnedLetters.delete(letter);
  } else {
    learnedLetters.add(letter);
  }
  saveLearnedLetters();
  renderLetterCards();
  updateProgress(letter);
}

function updateProgress(changedLetter) {
  const total = consonants.length + vowels.length;
  const current = learnedLetters.size;
  progressCount.textContent = `${current} / ${total}`;
  headerProgress.textContent = `已学 ${current} / ${total}`;
  learningProgress.max = total;
  learningProgress.value = current;
  if (!changedLetter) {
    progressStatus.textContent = "";
    return;
  }
  const state = learnedLetters.has(changedLetter) ? "已标记为学会" : "已取消标记";
  progressStatus.textContent = `${state} ${changedLetter}。目前已学 ${current} 个字母。`;
}

function buildSelector(items, target, category) {
  const buttons = items.map((item) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "selector-button";
    button.dataset.letter = item.letter;
    button.textContent = item.label || item.letter;
    button.setAttribute("lang", "ko");
    button.setAttribute("aria-pressed", String(
      category === "consonant"
        ? item.letter === selectedConsonant.letter
        : category === "vowel"
          ? item.letter === selectedVowel.letter
          : item.letter === selectedFinal.letter,
    ));
    const categoryName = category === "consonant" ? "初声" : category === "vowel" ? "元音" : "收音";
    button.setAttribute("aria-label", `选择${categoryName} ${item.label || item.letter || "无收音"}`);
    button.addEventListener("click", () => {
      if (category === "consonant") selectedConsonant = item;
      else if (category === "vowel") selectedVowel = item;
      else selectedFinal = item;
      renderSelectors();
      const selectorId = category === "consonant"
        ? "#consonant-selector"
        : category === "vowel" ? "#vowel-selector" : "#final-selector";
      document.querySelector(`${selectorId} button[data-letter="${item.letter}"]`).focus();
      updateSyllable();
    });
    return button;
  });
  target.replaceChildren(...buttons);
}

function renderSelectors() {
  buildSelector(consonants, consonantSelector, "consonant");
  buildSelector(vowels, vowelSelector, "vowel");
  buildSelector(finalConsonants, finalSelector, "final");
}

function updateSyllable() {
  const syllable = makeSyllable(selectedConsonant, selectedVowel, selectedFinal);
  const romanization = romanize(selectedConsonant, selectedVowel, selectedFinal);
  syllableOutput.textContent = syllable;
  romanizationOutput.textContent = romanization;
  finalConsonantOutput.textContent = selectedFinal.label || selectedFinal.letter || "无";
  syllableOutput.classList.remove("note-change");
  romanizationOutput.classList.remove("note-change");
  finalConsonantOutput.classList.remove("note-change");
  void syllableOutput.offsetWidth;
  syllableOutput.classList.add("note-change");
  romanizationOutput.classList.add("note-change");
  finalConsonantOutput.classList.add("note-change");
  selectionStatus.textContent = `已选：${selectedConsonant.letter}、${selectedVowel.letter}、${selectedFinal.label || selectedFinal.letter || "无收音"}`;

  const onsetTip = selectedConsonant.letter === "ㅇ"
    ? "ㅇ 在开头不发音，所以直接从元音开始读。"
    : `${selectedConsonant.letter} ${selectedConsonant.hint}。`;
  const finalTip = selectedFinal.letter
    ? `收音 ${selectedFinal.letter} 在这里先按拼写记；实际读法会随词而变化。`
    : "这里没有收音。";
  pronunciationTip.innerHTML = `<strong>近似提示：</strong>${onsetTip} ${selectedVowel.letter} ${selectedVowel.hint}；${finalTip} 组合 ${syllable} 的罗马音提示为 ${romanization}，仅作入门参考。`;
}

function shuffle(items) {
  return [...items].sort(() => Math.random() - 0.5);
}

function createQuiz() {
  const allLetters = [...consonants, ...vowels];
  const questions = [
    ...consonants.map((item) => ({
      prompt: `哪个字母在音节开头时通常不发音？`,
      answer: "ㅇ",
      explanation: "ㅇ 在音节开头是无声的；放在收音位置才表示 ng。",
      type: "special",
    })),
    ...allLetters.map((item) => ({
      prompt: `“${item.letter}” 的罗马音提示是什么？`,
      answer: item.roman || "起首无声",
      explanation: item.letter === "ㅇ" ? "ㅇ 在音节开头不发音。" : `${item.letter} 的常用入门罗马音提示是 ${item.roman}。`,
      type: "roman",
      item,
    })),
    ...vowels.map((item) => ({
      prompt: `哪个元音的提示最接近“${item.hint.replace("近似“", "").replace("”", "")}”？`,
      answer: item.letter,
      explanation: `${item.letter} 的提示是：${item.hint}。`,
      type: "vowel",
      item,
    })),
    {
      prompt: "“각”由哪三部分组成？",
      answer: "ㄱ + ㅏ + ㄱ",
      explanation: "각 = 初声 ㄱ + 元音 ㅏ + 收音 ㄱ。",
      type: "composition",
    },
    {
      prompt: "“와”里的组合元音是哪一个？",
      answer: "ㅘ",
      explanation: "와 = 初声 ㅇ（开头无声）+ 组合元音 ㅘ。",
      type: "compound-vowel",
    },
  ];
  const special = questions.filter((question) => question.type === "special")[0];
  const composition = questions.find((question) => question.type === "composition");
  const compoundVowel = questions.find((question) => question.type === "compound-vowel");
  const remaining = questions.filter((question) => !["special", "composition", "compound-vowel"].includes(question.type));
  return shuffle([special, composition, compoundVowel, ...shuffle(remaining).slice(0, 2)]);
}

function answerOptions(question) {
  if (question.type === "special") return shuffle(["ㅇ", "ㄴ", "ㅁ", "ㅎ"]);
  if (question.type === "roman") {
    const alternatives = question.item.letter === "ㅇ" ? ["n", "m", "h"] : shuffle([...consonants, ...vowels]
      .map((item) => item.roman || "起首无声")
      .filter((value) => value !== question.answer)).slice(0, 3);
    return shuffle([question.answer, ...alternatives]);
  }
  if (question.type === "composition") {
    return shuffle(["ㄱ + ㅏ + ㄱ", "ㄱ + ㅏ", "ㄴ + ㅏ + ㄴ", "ㅇ + ㅏ + ㄱ"]);
  }
  if (question.type === "compound-vowel") return shuffle(["ㅘ", "ㅗ", "ㅝ", "ㅙ"]);
  return shuffle([question.answer, ...vowels.filter((item) => item.letter !== question.answer).slice(0, 3).map((item) => item.letter)]);
}

function renderQuestion() {
  const question = quiz[quizIndex];
  const questionNumber = document.querySelector("#question-number");
  const scoreOutput = document.querySelector("#score");
  const questionOutput = document.querySelector("#question");
  const optionContainer = document.querySelector("#quiz-options");
  const feedback = document.querySelector("#quiz-feedback");
  const nextButton = document.querySelector("#next-question");

  questionNumber.textContent = `${quizIndex + 1} / ${quiz.length}`;
  scoreOutput.textContent = score;
  questionOutput.textContent = question.prompt;
  feedback.textContent = "";
  feedback.dataset.state = "";
  nextButton.disabled = true;
  nextButton.textContent = quizIndex === quiz.length - 1 ? "查看结果" : "下一题";
  questionAnswered = false;
  optionContainer.replaceChildren(...answerOptions(question).map((option) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "quiz-option";
    button.textContent = option;
    button.addEventListener("click", () => answerQuestion(button, option));
    return button;
  }));
}

function answerQuestion(button, answer) {
  if (questionAnswered) return;
  questionAnswered = true;
  const question = quiz[quizIndex];
  const correct = answer === question.answer;
  const feedback = document.querySelector("#quiz-feedback");
  const nextButton = document.querySelector("#next-question");
  document.querySelectorAll(".quiz-option").forEach((option) => {
    option.disabled = true;
    if (option.textContent === question.answer) option.classList.add("correct");
  });
  if (correct) {
    score += 1;
    feedback.textContent = `答对了。${question.explanation}`;
    feedback.dataset.state = "correct";
  } else {
    button.classList.add("incorrect");
    feedback.textContent = `这题选 ${question.answer}。${question.explanation}`;
    feedback.dataset.state = "incorrect";
  }
  document.querySelector("#score").textContent = score;
  nextButton.disabled = false;
  nextButton.focus();
}

function nextQuestion() {
  if (!questionAnswered) return;
  if (quizIndex < quiz.length - 1) {
    quizIndex += 1;
    renderQuestion();
    return;
  }
  const feedback = document.querySelector("#quiz-feedback");
  const questionOutput = document.querySelector("#question");
  questionOutput.textContent = `本轮完成：${score} / ${quiz.length}`;
  feedback.textContent = score === quiz.length
    ? "全对！你已经能稳定辨认这组基础字母了。"
    : "做得好。回到上面的拼读小桌再试几组，下一轮会重新随机出题。";
  feedback.dataset.state = "correct";
  document.querySelector("#quiz-options").replaceChildren();
  document.querySelector("#next-question").disabled = true;
}

function restartQuiz() {
  quiz = createQuiz();
  quizIndex = 0;
  score = 0;
  renderQuestion();
}

function normalizeTranscript(value) {
  return value.normalize("NFC").replace(/[\s\p{P}\p{S}]/gu, "");
}

function setRecognitionControls() {
  const available = Boolean(SpeechRecognitionConstructor) && isSecureSpeechContext();
  const busy = ["requesting-permission", "listening", "stopping"].includes(recognitionState);
  startListeningButton.disabled = !available || busy;
  stopListeningButton.disabled = !available || recognitionState !== "listening";
  retryListeningButton.disabled = !available || busy;
  newPracticeButton.disabled = busy;
}

function setRecognitionFeedback(message) {
  speechFeedback.textContent = message;
}

function showRecognitionError(error) {
  const messages = {
    "not-allowed": "浏览器没有获得麦克风权限。请在地址栏允许麦克风后再试，或改用下面的默读练习。",
    "service-not-allowed": "浏览器或语音服务不允许此次识别。你可以换用支持 Web Speech API 的浏览器，或改用默读练习。",
    "audio-capture": "没有找到可用麦克风。请检查设备连接后再试，或改用默读练习。",
    "not-readable": "麦克风正在被其他应用占用。请关闭占用麦克风的应用后再试，或改用默读练习。",
    "no-speech": "没有听到可识别的声音。请靠近麦克风、清楚读出目标后再试。",
    network: "语音识别服务需要网络，但当前连接不可用。恢复网络后再试，或改用默读练习。",
    "language-not-supported": "当前浏览器不支持韩语（ko-KR）识别。请改用默读练习。",
    aborted: "本次跟读已停止。你可以再试，或换一个练习。",
  };
  recognitionState = "error";
  setRecognitionControls();
  setRecognitionFeedback(messages[error] || `语音识别发生问题（${error}）。请再试，或改用默读练习。`);
}

function createRecognition() {
  recognition = new SpeechRecognitionConstructor();
  recognition.lang = "ko-KR";
  recognition.continuous = false;
  recognition.interimResults = false;
  recognition.maxAlternatives = 3;

  recognition.onstart = () => {
    recognitionState = "listening";
    setRecognitionControls();
    speechResult.textContent = "正在听你说话…";
    setRecognitionFeedback("正在听。请清楚读出上面的韩文字或音节。");
  };

  recognition.onresult = (event) => {
    const finalTranscript = [...event.results]
      .filter((result) => result.isFinal)
      .map((result) => result[0].transcript)
      .join(" ")
      .trim();
    if (!finalTranscript) return;

    recognitionState = "complete";
    speechResult.textContent = finalTranscript;
    const target = practicePrompts[practiceIndex].target;
    const isMatch = normalizeTranscript(finalTranscript).includes(normalizeTranscript(target));
    setRecognitionFeedback(isMatch
      ? `识别到“${finalTranscript}”。找到了“${target}”，这次算你读对。`
      : `识别到“${finalTranscript}”，还没有找到“${target}”。识别不一定准确，慢一点再试一次也没关系。`);
    setRecognitionControls();
  };

  recognition.onerror = (event) => showRecognitionError(event.error);

  recognition.onend = () => {
    if (recognitionState === "listening") {
      recognitionState = "idle";
      setRecognitionFeedback("识别已结束，但没有收到完整结果。请再试，或改用默读练习。");
    } else if (recognitionState === "stopping") {
      recognitionState = "idle";
      setRecognitionFeedback("已停止本次跟读。你可以再试，或换一个练习。");
    }
    setRecognitionControls();
  };
}

function explainPermissionError(error) {
  const reasons = {
    NotAllowedError: "浏览器没有获得麦克风权限。请在地址栏允许麦克风后再试，或改用默读练习。",
    SecurityError: "当前页面不是安全上下文，浏览器不能请求麦克风。请通过 HTTPS 或 http://localhost 打开本页。",
    NotFoundError: "没有找到可用麦克风。请检查设备连接后再试，或改用默读练习。",
    NotReadableError: "麦克风正在被其他应用占用。请关闭占用麦克风的应用后再试，或改用默读练习。",
    OverconstrainedError: "当前设备无法满足麦克风请求。请检查输入设备后再试，或改用默读练习。",
  };
  return reasons[error.name] || `无法请求麦克风权限（${error.name || "未知原因"}）。请再试，或改用默读练习。`;
}

async function requestMicrophonePermission() {
  if (!navigator.mediaDevices?.getUserMedia) {
    speechSupport.textContent = "此浏览器无法预先请求麦克风权限；接下来会由语音识别功能尝试请求。若未出现提示，请改用支持 Web Speech API 的浏览器或默读练习。";
    return true;
  }

  let stream;
  try {
    stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    return true;
  } catch (error) {
    recognitionState = "error";
    setRecognitionControls();
    setRecognitionFeedback(explainPermissionError(error));
    return false;
  } finally {
    stream?.getTracks().forEach((track) => track.stop());
  }
}

async function startListening() {
  if (!SpeechRecognitionConstructor) {
    setRecognitionFeedback("当前浏览器不支持浏览器内韩语识别。请使用“听一听”或默读三遍。");
    return;
  }
  if (!isSecureSpeechContext()) {
    recognitionState = "error";
    setRecognitionControls();
    setRecognitionFeedback("跟读检测需要 HTTPS 或 http://localhost。请不要直接打开文件；请在本地服务器或 HTTPS 网站中重试。");
    return;
  }
  if (!recognition) createRecognition();
  recognitionState = "requesting-permission";
  setRecognitionControls();
  speechResult.textContent = "正在请求麦克风权限…";
  setRecognitionFeedback("请在浏览器提示中允许使用麦克风；权限只用于本次跟读，音频不会被保存或上传。");
  const allowed = await requestMicrophonePermission();
  if (!allowed) return;

  recognitionState = "listening";
  setRecognitionControls();
  try {
    recognition.start();
  } catch (error) {
    recognitionState = "error";
    setRecognitionControls();
    if (error.name === "InvalidStateError") {
      setRecognitionFeedback("识别仍在进行中。请先停止，等状态结束后再试。");
    } else {
      setRecognitionFeedback(`无法启动浏览器语音识别（${error.name}）。请再试，或改用默读练习。`);
    }
  }
}

function stopListening() {
  if (!recognition || recognitionState !== "listening") return;
  recognitionState = "stopping";
  setRecognitionControls();
  setRecognitionFeedback("正在停止本次跟读…");
  recognition.stop();
}

function updatePracticeTarget() {
  practiceIndex = (practiceIndex + 1) % practicePrompts.length;
  const prompt = practicePrompts[practiceIndex];
  practiceTarget.textContent = prompt.target;
  practiceGuide.textContent = prompt.guide;
  practiceAlternativeTarget.textContent = prompt.target;
  speechResult.textContent = "还没有文字";
  setRecognitionFeedback(`新的练习是“${prompt.target}”。可以听一听、跟读，或直接默读三遍。`);
}

function initializeRecognition() {
  if (!SpeechRecognitionConstructor) {
    speechSupport.textContent = "当前浏览器不支持浏览器内语音识别。请使用“听一听”或默读三遍，再回到拼读小桌练习。";
  } else if (!isSecureSpeechContext()) {
    speechSupport.textContent = "跟读检测需要 HTTPS 或 http://localhost。当前页面不是安全上下文，已停用跟读；请使用本地服务器或 HTTPS 网站。";
  } else if (!navigator.mediaDevices?.getUserMedia) {
    speechSupport.textContent = "此浏览器支持语音识别，但不能预先请求麦克风权限。点击开始后会尝试由识别功能请求；本页不保存或上传音频与转写。";
  } else {
    speechSupport.textContent = "此浏览器支持浏览器内韩语识别。点击开始会请求麦克风权限，随后立即释放权限测试用的音频轨道并启动识别；本页不保存或上传音频与转写。";
  }
  setRecognitionControls();
}

function setSpeechSynthesisStatus(message) {
  speechSynthesisStatus.textContent = message;
  letterSpeechStatus.textContent = message;
}

function getKoreanVoice() {
  if (!("speechSynthesis" in window) || !("SpeechSynthesisUtterance" in window)) return null;
  return window.speechSynthesis.getVoices()
    .find((voice) => voice.lang.toLowerCase().startsWith("ko")) || null;
}

function updateSpeechSynthesisSupport() {
  const koreanVoice = getKoreanVoice();
  const message = !("speechSynthesis" in window) || !("SpeechSynthesisUtterance" in window)
    ? "当前浏览器没有可用的朗读功能。请看着示例音节默读三遍。"
    : koreanVoice
      ? "已找到韩语朗读声音。朗读由你的浏览器和设备处理。"
      : "当前设备没有可用的韩语朗读声音。请看着示例音节默读三遍。";
  playPronunciationButton.disabled = !koreanVoice;
  document.querySelectorAll(".letter-sound-button").forEach((button) => {
    button.disabled = !koreanVoice;
  });
  setSpeechSynthesisStatus(message);
}

function speakKorean(text, description) {
  const koreanVoice = getKoreanVoice();
  if (!koreanVoice) {
    updateSpeechSynthesisSupport();
    return;
  }
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "ko-KR";
  utterance.voice = koreanVoice;
  utterance.rate = 0.72;
  setSpeechSynthesisStatus(`正在朗读${description}。`);
  utterance.onend = () => {
    setSpeechSynthesisStatus(`已朗读${description}。可以再听一次，或自己跟读。`);
  };
  utterance.onerror = () => {
    setSpeechSynthesisStatus(`浏览器暂时无法朗读${description}。请看着示例音节默读三遍。`);
  };
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(utterance);
}

function playPronunciation() {
  const target = practicePrompts[practiceIndex].target;
  speakKorean(target, `练习“${target}”`);
}

document.querySelector("#reset-progress").addEventListener("click", () => {
  if (!window.confirm("确定要清除所有已学字母的进度吗？")) return;
  learnedLetters = new Set();
  saveLearnedLetters();
  renderLetterCards();
  updateProgress("全部字母");
  progressStatus.textContent = "学习进度已重置。可以从任意字母重新开始。";
});
document.querySelector("#next-question").addEventListener("click", nextQuestion);
document.querySelector("#restart-quiz").addEventListener("click", restartQuiz);
startListeningButton.addEventListener("click", startListening);
stopListeningButton.addEventListener("click", stopListening);
retryListeningButton.addEventListener("click", startListening);
newPracticeButton.addEventListener("click", () => {
  stopListening();
  updatePracticeTarget();
});
playPronunciationButton.addEventListener("click", playPronunciation);
if ("speechSynthesis" in window) {
  window.speechSynthesis.addEventListener("voiceschanged", updateSpeechSynthesisSupport);
}

renderLetterCards();
renderSelectors();
updateProgress("");
updateSyllable();
restartQuiz();
updatePracticeTarget();
initializeRecognition();
updateSpeechSynthesisSupport();
