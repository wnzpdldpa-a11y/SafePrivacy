document.getElementById('checkResultBtn').addEventListener('click', function () {
    const checkboxes = document.querySelectorAll('#checkList input[type="checkbox"]');
    let score = 0;

    checkboxes.forEach((cb) => {
        if (cb.checked) {
            score++;
        }
    });

    const resultBox = document.getElementById('resultBox');
    const resultTitle = document.getElementById('resultTitle');
    const resultDesc = document.getElementById('resultDesc');

    let title = "";
    let desc = "";

    if (score === 5) {
        title = "🏆 보안 마스터 레벨 (5/5점)";
        desc = "완벽합니다! 철저한 보안 습관을 가지고 계시네요. 지금처럼만 유지하신다면 개인정보 유출 걱정은 없습니다.";
    } else if (score >= 3) {
        title = "🥈 주의 요망 레벨 (" + score + "/5점)";
        desc = "보안 의식이 좋지만, 일부 놓치고 있는 습관이 있어요. 체크하지 못한 항목들을 다시 점검해 보세요!";
    } else {
        title = "⚠️ 위험 레벨 (" + score + "/5점)";
        desc = "개인정보 보호에 취약한 상태입니다! 사칭 문자, 비밀번호 관리 등 기본적인 보안 수칙부터 시급히 실천해야 합니다.";
    }

    resultTitle.textContent = title;
    resultDesc.textContent = desc;
    resultBox.style.display = 'block';

    resultBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
});