# Income Expense Calculator

## Overview
The Income Expense Calculator is a web-based application designed to help users track their financial transactions. Users can log their incomes and expenses, calculate the total income, total expenses, and net balance, and filter the entries by type (all, income, or expense). The app leverages local storage to persist data.

---
Download or clone the repository:

git clone [https://github.com/NickshanJ/Calculator.git]

Navigate to the project folder and open the index.html file in your browser.

## Features
1. **Add Transactions**: Users can input a description and amount for each transaction.
2. **Filter Transactions**: View all transactions or filter by income or expenses.
3. **Edit Transactions**: Modify existing entries.
4. **Delete Transactions**: Remove specific entries from the list.
5. **Reset Fields**: Clear input fields after adding or editing entries.
6. **Local Storage Support**: All entries are stored in the browser's local storage, ensuring persistence across sessions.

---

## Technologies Used
- **HTML**: Markup for structuring the application.
- **CSS (TailwindCSS)**: Styling for an aesthetically pleasing interface.
- **JavaScript**: Logic for adding, editing, deleting, filtering, and storing transactions.
- **Local Storage**: Persistent data storage in the browser.

---

## File Structure
1. **HTML**: Defines the structure of the web page, including the form for adding transactions, display areas for balances, and filter options.
2. **CSS**: Contains custom styles alongside TailwindCSS classes for the design.
3. **JavaScript**: Implements the functionality of the application, including interaction with local storage and DOM manipulation.

---

## How to Use
1. **Add a Transaction**:
   - Enter a description in the "Description" field.
   - Enter a positive or negative amount in the "Amount" field (positive for income, negative for expense).
   - Click the "Add Transaction" button.

2. **Filter Transactions**:
   - Select one of the radio buttons (All, Income, Expense) to filter entries.

3. **Edit a Transaction**:
   - Click the "Edit" button next to a transaction.
   - Modify the description and/or amount in the fields.
   - Click "Add Transaction" to save changes.

4. **Delete a Transaction**:
   - Click the "Delete" button next to the transaction.

5. **Reset Fields**:
   - Click the "Reset" button to clear the input fields.

---

## Installation and Setup
1. Clone or download the repository.
2. Open the `index.html` file in a browser to run the application.
3. Ensure the `script.js` file is in the same directory as the HTML file.
4. An active internet connection is required to load TailwindCSS via CDN.

---

## Future Improvements
1. Add user authentication for personalized experiences.
2. Enable export/import functionality for transactions.
3. Integrate with a backend for centralized storage.
4. Enhance the UI with charts and graphs for better visualization of financial data.

---
Steps to Build the Income Expense Calculator:

Step 1: Plan the Application
Understand what you need:

Inputs:
A field to enter the description of the transaction (e.g., "Groceries").
A field to enter the amount (positive for income, negative for expense).
Buttons:
One to Add the transaction.
One to Reset the input fields.
Display Areas:
Total income.
Total expenses.
Net balance (income - expenses).
List of Entries:
Show all the transactions with an option to delete or edit each.
Step 2: Build the Interface with JavaScript
Since there’s no pre-built HTML or CSS:

Use JavaScript to create elements like div, input, button, and ul (unordered list for transactions).
Use inline styles to make the application visually appealing:
Set colors for income (green) and expense (red).
Add padding, margins, and alignment for a basic layout.
For example:

Create a div for the app container.
Add an input element for the description and another for the amount.
Create buttons for Add and Reset.
Step 3: Add Functionality
Write JavaScript functions to handle the core features:

Add a Transaction:

Capture the values from the input fields.
Add the transaction details (description and amount) to a list stored in memory (an array).
Recalculate totals for income, expenses, and net balance.
Display Transactions:

Create a new li (list item) for each transaction.
Use a color code (e.g., green for income, red for expense).
Append the transaction to the list displayed on the page.
Reset Fields:

Clear the description and amount input fields.
Edit or Delete Transactions:

Edit: Populate the input fields with the selected transaction’s details and remove it temporarily from the list.
Delete: Remove the selected transaction from the list and update totals.
Filter Transactions (Optional):

Add filters like “Show All,” “Income Only,” or “Expenses Only” using buttons or dropdowns.
Dynamically update the displayed list based on the selected filter.
Step 4: Save Data Using LocalStorage
Use localStorage to save transactions, so they remain available even after refreshing the page.
On page load, check localStorage for existing transactions and display them.
Step 5: Test the Application
Make sure:

You can add transactions.
Income and expense totals update correctly.
Transactions are displayed properly.
Editing and deleting work as expected.
Data persists across sessions with localStorage.



