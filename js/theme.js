var themeValue = sessionStorage.getItem('theme');
if (themeValue != null) {
    document.body.classList.add(themeValue);
} else {
    document.body.classList.add('light');
}

function toggleTheme() {
    if (document.body.classList.contains('light')) {
        document.body.classList.replace('light', 'dark')
        sessionStorage.setItem('theme', 'dark')
    } else {
        document.body.classList.replace('dark', 'light')
        sessionStorage.setItem('theme', 'light')
    }
}
