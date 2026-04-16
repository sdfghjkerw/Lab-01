
// 1. Define Island Behaviors
const IslandRegistry = {
    'counter': (container) => {
        console.log('[Island Engine] Initializing Counter Island', container);

        let count = 0;

        const display = container.querySelector('.count-display');
        const btnInc = container.querySelector('.btn-increase');
        const btnDec = container.querySelector('.btn-decrease');

        btnInc.addEventListener('click', () => {
            count++;
            display.textContent = count;
        });

        btnDec.addEventListener('click', () => {
            if (count > 0) count--;
            display.textContent = count;
        });

        // Scope изолирован внутри этой функции
    },

    'color-picker': (container) => {
        console.log('[Island Engine] Initializing Color Picker Island', container);

        const preview = container.querySelector('.preview-box');
        const buttons = container.querySelectorAll('button[data-color]');

        buttons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const hex = e.target.getAttribute('data-color');
                preview.style.backgroundColor = hex;
            });
        });
    }
};


// 2. Discover and Mount
document.addEventListener('DOMContentLoaded', () => {

    const islands = document.querySelectorAll('[data-island-type]');

    // Lazy Hydration через IntersectionObserver
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const type = entry.target.getAttribute('data-island-type');

                if (IslandRegistry[type]) {
                    IslandRegistry[type](entry.target);

                    // Останавливаем наблюдение после инициализации
                    observer.unobserve(entry.target);
                }
            }
        });
    }, {
        threshold: 0.1 // срабатывает, когда 10% элемента видно
    });

    islands.forEach(island => observer.observe(island));
});