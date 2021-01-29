function findAccountById(accounts, id) {
	const accountFind = accounts.find(account => account.id === id)
	return accountFind
}

function sortAccountsByLastName(accounts) {
	return accounts.sort((accountA, accountB) => accountA.name.last > accountB.name.last ? 1 : -1)
}

function numberOfBorrows(account, books) {
	let total = 0
	books.forEach(book => {
		book.borrows.forEach(borrow => {
			if (borrow.id === account.id)
				total += 1
		})
	})
	return total
}

function getBooksPossessedByAccount(account, books, authors) {
	let checkedOut = books.filter((book) => {
		return book.borrows.some((borrow) => {
			return borrow.id === account.id && !borrow.returned;
		});
	});
	let results = [];
	checkedOut.forEach((book) => {
		let author = authors.find((author) => author.id === book.authorId);
		let bookCopy = { ...book };
		bookCopy.author = author;
		results.push(bookCopy);
	});
	return results;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  numberOfBorrows,
  getBooksPossessedByAccount,
};