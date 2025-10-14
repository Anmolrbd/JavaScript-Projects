
    const siteNameInput = document.getElementById('siteName');
    const siteURLInput = document.getElementById('siteURL');
    const saveBtn = document.getElementById('saveBtn');
    const bookmarkList = document.getElementById('bookmarkList');
    function renderBookmarks() {
        const bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
        bookmarkList.innerHTML = '';
        bookmarks.forEach((b, index) => {
            const div = document.createElement('div');
            div.className = 'flex justify-between items-center bg-white p-4 shadow rounded-lg';
            div.innerHTML = `
                <a href="${b.url}" target="_blank" class="text-blue-600 font-semibold hover:underline">${b.name}</a>
                <button class="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg delete-btn" data-index="${index}">Delete</button>
            `;
            bookmarkList.appendChild(div);
        });
        document.querySelectorAll('.delete-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                deleteBookmark(btn.dataset.index);
            });
        });
    }
    saveBtn.addEventListener('click', () => {
        const name = siteNameInput.value.trim();
        const url = siteURLInput.value.trim();
        if (!name || !url) return alert('Fill both fields!');
        if (!url.startsWith('http')) return alert('URL must start with http or https');
        const newBookmark = { name, url };
        const bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
        bookmarks.push(newBookmark);
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
        siteNameInput.value = '';
        siteURLInput.value = '';
        renderBookmarks();
    });
    function deleteBookmark(index) {
        let bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
        bookmarks.splice(index, 1);
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
        renderBookmarks();
    }
    renderBookmarks();
