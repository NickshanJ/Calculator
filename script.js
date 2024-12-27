document.addEventListener('DOMContentLoaded', () => {
    loadEntries();
    document.getElementsByName('filter').forEach(radio => {
        radio.addEventListener('change', filterEntries);
    });
});

function addEntry() {
    const description = document.getElementById('description').value;
    const amount = parseFloat(document.getElementById('amount').value);
    if (description && !isNaN(amount)) {
        const entry = { description, amount };
        let entries = JSON.parse(localStorage.getItem('entries')) || [];
        entries.push(entry);
        localStorage.setItem('entries', JSON.stringify(entries));
        loadEntries();
        resetFields();
    }
}

function loadEntries() {
    const entriesList = document.getElementById('entries');
    entriesList.innerHTML = '';
    let entries = JSON.parse(localStorage.getItem('entries')) || [];
    const filterValue = document.querySelector('input[name="filter"]:checked').value;

    let totalIncome = 0;
    let totalExpenses = 0;
    
    entries.forEach((entry, index) => {
        if (filterValue === 'all' || (filterValue === 'income' && entry.amount > 0) || (filterValue === 'expense' && entry.amount < 0)) {
            const li = document.createElement('li');
            li.className = `flex justify-between items-center p-3 border-b ${entry.amount > 0 ? 'income' : 'expense'}`;
            li.innerHTML = `
                <span>${entry.description}: ${entry.amount}</span>
                <div>
                    <button onclick="editEntry(${index})" class="bg-green-500 hover:bg-green-700 text-white p-2 rounded-lg ml-2 transition duration-300">Edit</button>
                    <button onclick="deleteEntry(${index})" class="bg-red-500 hover:bg-red-700 text-white p-2 rounded-lg ml-2 transition duration-300">Delete</button>
                </div>
            `;
            entriesList.appendChild(li);
        }
        if (entry.amount > 0) {
            totalIncome += entry.amount;
        } else {
            totalExpenses += entry.amount;
        }
    });

    document.getElementById('total-income').textContent = totalIncome;
    document.getElementById('total-expenses').textContent = totalExpenses;
    document.getElementById('net-balance').textContent = totalIncome + totalExpenses;
}

function resetFields() {
    document.getElementById('description').value = '';
    document.getElementById('amount').value = '';
}

function filterEntries() {
    loadEntries();
}

function editEntry(index) {
    let entries = JSON.parse(localStorage.getItem('entries')) || [];
    const entry = entries[index];
    document.getElementById('description').value = entry.description;
    document.getElementById('amount').value = entry.amount;
    deleteEntry(index);
}

function deleteEntry(index) {
    let entries = JSON.parse(localStorage.getItem('entries')) || [];
    entries.splice(index, 1);
    localStorage.setItem('entries', JSON.stringify(entries));
    loadEntries();
}