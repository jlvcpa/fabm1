export const qbMerchJournalizing = [
  {
    "FABM1-Merch-Period-FIFO-001": {
      "id": "set1_periodic_fifo_comprehensive",
      "instructions": "Journalize the transactions using Periodic Inventory System and FIFO Costing. Use the following accounts: Accounts Payable, Accounts Receivable, Cash, Purchases, Purchase Returns and Allowances, Purchase Discounts, Freight In, Freight Out, Sales, Sales Returns and Allowances, Sales Discounts, Utilities Expense, Owner's Capital, Owner's Drawings, Rent Expense, Salaries Expense.",
      "subject": "FABM1",
      "title": "Set 1: Periodic Inventory - FIFO Costing",
      "topic": "Journalizing - Merchandising Business Transactions",
      "transactions": [
        { "date": "Dec 1", "description": "Owner invested ₱100,000 cash.", "rows": 3, "solution": [ { "account": "Cash", "debit": 100000 }, { "account": "Owner's Capital", "credit": 100000 }, { "account": "Initial investment.", "isExplanation": true } ] },
        { "date": "Dec 2", "description": "Purchased 2,000 units at ₱20 each on account, terms 2/10, n/30.", "rows": 3, "solution": [ { "account": "Purchases", "debit": 40000 }, { "account": "Accounts Payable", "credit": 40000 }, { "account": "Purchased 2000 units.", "isExplanation": true } ] },
        { "date": "Dec 3", "description": "Paid freight in ₱1,000 cash.", "rows": 3, "solution": [ { "account": "Freight In", "debit": 1000 }, { "account": "Cash", "credit": 1000 }, { "account": "Paid freight.", "isExplanation": true } ] },
        { "date": "Dec 5", "description": "Returned 200 defective units to supplier.", "rows": 3, "solution": [ { "account": "Accounts Payable", "debit": 4000 }, { "account": "Purchase Returns and Allowances", "credit": 4000 }, { "account": "Returned 200 units.", "isExplanation": true } ] },
        { "date": "Dec 7", "description": "Purchased 1,000 units at ₱25 each on account.", "rows": 3, "solution": [ { "account": "Purchases", "debit": 25000 }, { "account": "Accounts Payable", "credit": 25000 }, { "account": "Purchased 1000 units.", "isExplanation": true } ] },
        { "date": "Dec 10", "description": "Sold 1,500 units on account @ ₱50 each, terms 1/10, n/30.", "rows": 3, "solution": [ { "account": "Accounts Receivable", "debit": 75000 }, { "account": "Sales", "credit": 75000 }, { "account": "Sold 1500 units.", "isExplanation": true } ] },
        { "date": "Dec 11", "description": "Paid balance for Dec 2 purchase within discount period. (40000 - 4000 return = 36000 bal. 2% disc).", "rows": 4, "solution": [ { "account": "Accounts Payable", "debit": 36000 }, { "account": "Purchase Discounts", "credit": 720 }, { "account": "Cash", "credit": 35280 }, { "account": "Paid account.", "isExplanation": true } ] },
        { "date": "Dec 12", "description": "Customer returned 100 units from Dec 10 sale.", "rows": 3, "solution": [ { "account": "Sales Returns and Allowances", "debit": 5000 }, { "account": "Accounts Receivable", "credit": 5000 }, { "account": "Sales return.", "isExplanation": true } ] },
        { "date": "Dec 14", "description": "Paid freight out ₱500 cash.", "rows": 3, "solution": [ { "account": "Freight Out", "debit": 500 }, { "account": "Cash", "credit": 500 }, { "account": "Delivery expense.", "isExplanation": true } ] },
        { "date": "Dec 19", "description": "Received payment from Dec 10 customer within discount. (75000 - 5000 return = 70000 bal. 1% disc).", "rows": 4, "solution": [ { "account": "Cash", "debit": 69300 }, { "account": "Sales Discounts", "debit": 700 }, { "account": "Accounts Receivable", "credit": 70000 }, { "account": "Collection.", "isExplanation": true } ] },
        { "date": "Dec 20", "description": "Purchased supplies ₱500 cash.", "rows": 3, "solution": [ { "account": "Supplies", "debit": 500 }, { "account": "Cash", "credit": 500 }, { "account": "Supplies.", "isExplanation": true } ] },
        { "date": "Dec 25", "description": "Owner withdrew ₱2,000 cash.", "rows": 3, "solution": [ { "account": "Owner's Drawings", "debit": 2000 }, { "account": "Cash", "credit": 2000 }, { "account": "Withdrawal.", "isExplanation": true } ] },
        { "date": "Dec 28", "description": "Paid rent ₱1,500.", "rows": 3, "solution": [ { "account": "Rent Expense", "debit": 1500 }, { "account": "Cash", "credit": 1500 }, { "account": "Rent.", "isExplanation": true } ] },
        { "date": "Dec 30", "description": "Paid salaries ₱2,000.", "rows": 3, "solution": [ { "account": "Salaries Expense", "debit": 2000 }, { "account": "Cash", "credit": 2000 }, { "account": "Salaries.", "isExplanation": true } ] },
        { "date": "Dec 31", "description": "Accrued utilities ₱300.", "rows": 3, "solution": [ { "account": "Utilities Expense", "debit": 300 }, { "account": "Accounts Payable", "credit": 300 }, { "account": "Accrual.", "isExplanation": true } ] }
      ],
      "type": "Journalizing"
    }
  },
  {
    "FABM1-Merch-Period-FIFO-002": {
      "id": "set1_periodic_fifo",
      "instructions": "Journalize the transactions using Periodic Inventory System and FIFO Costing. Use the following accounts: Accounts Payable, Accounts Receivable, Cash, Purchases, Purchase Returns and Allowances, Purchase Discounts, Freight In, Freight Out, Sales, Sales Returns and Allowances, Sales Discounts, Utilities Expense, Owner's Capital, Owner's Drawings, No Entry.",
      "subject": "FABM1",
      "title": "Set 2: FIFO Costing (Periodic)",
      "topic": "Journalizing - Merchandising Business Transactions",
      "transactions": [
        { "date": "Feb 1", "description": "Owner invested ₱20,000 cash.", "rows": 3, "solution": [ { "account": "Cash", "debit": 20000 }, { "account": "Owner's Capital", "credit": 20000 }, { "account": "Investment.", "isExplanation": true } ] },
        { "date": "Feb 2", "description": "Purchased 200 units @ ₱50 each, terms 2/10, n/30.", "rows": 3, "solution": [ { "account": "Purchases", "debit": 10000 }, { "account": "Accounts Payable", "credit": 10000 }, { "account": "Purchased 200 units @ ₱50.", "isExplanation": true } ] },
        { "date": "Feb 3", "description": "Paid freight in ₱200 cash.", "rows": 3, "solution": [ { "account": "Freight In", "debit": 200 }, { "account": "Cash", "credit": 200 }, { "account": "Paid freight on purchase.", "isExplanation": true } ] },
        { "date": "Feb 5", "description": "Sold 100 units @ ₱80 on account, terms 1/10, n/30.", "rows": 3, "solution": [ { "account": "Accounts Receivable", "debit": 8000 }, { "account": "Sales", "credit": 8000 }, { "account": "Sold 100 units on account.", "isExplanation": true } ] },
        { "date": "Feb 7", "description": "Returned 10 defective units to supplier from Feb 2 purchase.", "rows": 3, "solution": [ { "account": "Accounts Payable", "debit": 500 }, { "account": "Purchase Returns and Allowances", "credit": 500 }, { "account": "Returned goods to supplier.", "isExplanation": true } ] },
        { "date": "Feb 9", "description": "Purchased 100 units @ ₱54 each.", "rows": 3, "solution": [ { "account": "Purchases", "debit": 5400 }, { "account": "Accounts Payable", "credit": 5400 }, { "account": "Purchased 100 units.", "isExplanation": true } ] },
        { "date": "Feb 11", "description": "Paid supplier for Feb 2 purchase balance, within discount period.", "rows": 4, "solution": [ { "account": "Accounts Payable", "debit": 9500 }, { "account": "Purchase Discounts", "credit": 190 }, { "account": "Cash", "credit": 9310 }, { "account": "Paid account with discount.", "isExplanation": true } ] },
        { "date": "Feb 14", "description": "Customer from Feb 5 returned 10 units.", "rows": 3, "solution": [ { "account": "Sales Returns and Allowances", "debit": 800 }, { "account": "Accounts Receivable", "credit": 800 }, { "account": "Customer return.", "isExplanation": true } ] },
        { "date": "Feb 15", "description": "Collected from Feb 5 customer within discount period.", "rows": 4, "solution": [ { "account": "Cash", "debit": 7128 }, { "account": "Sales Discounts", "debit": 72 }, { "account": "Accounts Receivable", "credit": 7200 }, { "account": "Collection with discount.", "isExplanation": true } ] },
        { "date": "Feb 18", "description": "Sold 50 units for cash ₱85 each.", "rows": 3, "solution": [ { "account": "Cash", "debit": 4250 }, { "account": "Sales", "credit": 4250 }, { "account": "Cash sale.", "isExplanation": true } ] },
        { "date": "Feb 20", "description": "Paid freight out ₱100.", "rows": 3, "solution": [ { "account": "Freight Out", "debit": 100 }, { "account": "Cash", "credit": 100 }, { "account": "Paid delivery expense.", "isExplanation": true } ] },
        { "date": "Feb 22", "description": "Purchased 50 units @ ₱56.", "rows": 3, "solution": [ { "account": "Purchases", "debit": 2800 }, { "account": "Accounts Payable", "credit": 2800 }, { "account": "Purchased 50 units.", "isExplanation": true } ] },
        { "date": "Feb 25", "description": "Owner withdrew ₱1,000 cash.", "rows": 3, "solution": [ { "account": "Owner's Drawings", "debit": 1000 }, { "account": "Cash", "credit": 1000 }, { "account": "Withdrawal.", "isExplanation": true } ] },
        { "date": "Feb 27", "description": "Paid utilities ₱400.", "rows": 3, "solution": [ { "account": "Utilities Expense", "debit": 400 }, { "account": "Cash", "credit": 400 }, { "account": "Paid utilities.", "isExplanation": true } ] },
        { "date": "Feb 28", "description": "Inventory shrinkage adjustment ₱50.", "rows": 0, "solution": [ { "account": "No Entry", "debit": "" }, { "account": "No Entry in Periodic.", "isExplanation": true } ] }
      ],
      "type": "Journalizing"
    }
  },
  {
    "FABM1-Merch-Period-FIFO-003": {
      "id": "set3_periodic_fifo",
      "instructions": "Journalize the transactions using Periodic Inventory System and FIFO Costing. Use the following accounts: Accounts Payable, Accounts Receivable, Cash, Purchases, Purchase Returns and Allowances, Purchase Discounts, Freight In, Sales, Sales Returns and Allowances, Sales Discounts, Freight Out, Rent Expense, Owner's Capital, Owner's Drawings.",
      "subject": "FABM1",
      "title": "Set 3: FIFO Costing (Periodic)",
      "topic": "Journalizing - Merchandising Business Transactions",
      "transactions": [
        { "date": "Mar 1", "description": "Owner invested ₱30,000 cash.", "rows": 3, "solution": [ { "account": "Cash", "debit": 30000 }, { "account": "Owner's Capital", "credit": 30000 }, { "account": "Investment.", "isExplanation": true } ] },
        { "date": "Mar 2", "description": "Purchased 500 units @ ₱20 each, trade discount 5%, terms n/30.", "rows": 3, "solution": [ { "account": "Purchases", "debit": 9500 }, { "account": "Accounts Payable", "credit": 9500 }, { "account": "Recorded at net of trade discount.", "isExplanation": true } ] },
        { "date": "Mar 3", "description": "Paid freight in ₱500.", "rows": 3, "solution": [ { "account": "Freight In", "debit": 500 }, { "account": "Cash", "credit": 500 }, { "account": "Paid freight in.", "isExplanation": true } ] },
        { "date": "Mar 5", "description": "Sold 300 units @ ₱40.", "rows": 3, "solution": [ { "account": "Accounts Receivable", "debit": 12000 }, { "account": "Sales", "credit": 12000 }, { "account": "Sold goods on account.", "isExplanation": true } ] },
        { "date": "Mar 7", "description": "Purchased 200 units @ ₱25.", "rows": 3, "solution": [ { "account": "Purchases", "debit": 5000 }, { "account": "Accounts Payable", "credit": 5000 }, { "account": "Purchased 200 units.", "isExplanation": true } ] },
        { "date": "Mar 10", "description": "Returned 20 units to supplier from Mar 7 purchase.", "rows": 3, "solution": [ { "account": "Accounts Payable", "debit": 500 }, { "account": "Purchase Returns and Allowances", "credit": 500 }, { "account": "Returned goods.", "isExplanation": true } ] },
        { "date": "Mar 12", "description": "Sold 150 units @ ₱45, terms 2/10, n/30.", "rows": 3, "solution": [ { "account": "Accounts Receivable", "debit": 6750 }, { "account": "Sales", "credit": 6750 }, { "account": "Sold 150 units on account.", "isExplanation": true } ] },
        { "date": "Mar 14", "description": "Paid freight out ₱150.", "rows": 3, "solution": [ { "account": "Freight Out", "debit": 150 }, { "account": "Cash", "credit": 150 }, { "account": "Paid freight out.", "isExplanation": true } ] },
        { "date": "Mar 16", "description": "Customer returned 5 units from Mar 12 sale.", "rows": 3, "solution": [ { "account": "Sales Returns and Allowances", "debit": 225 }, { "account": "Accounts Receivable", "credit": 225 }, { "account": "Customer return.", "isExplanation": true } ] },
        { "date": "Mar 20", "description": "Received payment from Mar 12 customer within discount.", "rows": 4, "solution": [ { "account": "Cash", "debit": 6394.5 }, { "account": "Sales Discounts", "debit": 130.5 }, { "account": "Accounts Receivable", "credit": 6525 }, { "account": "Collection with discount.", "isExplanation": true } ] },
        { "date": "Mar 22", "description": "Paid supplier for Mar 2 purchase.", "rows": 3, "solution": [ { "account": "Accounts Payable", "debit": 9500 }, { "account": "Cash", "credit": 9500 }, { "account": "Paid account in full.", "isExplanation": true } ] },
        { "date": "Mar 25", "description": "Purchased 100 units @ ₱30 cash.", "rows": 3, "solution": [ { "account": "Purchases", "debit": 3000 }, { "account": "Cash", "credit": 3000 }, { "account": "Cash purchase.", "isExplanation": true } ] },
        { "date": "Mar 28", "description": "Paid rent ₱1,200.", "rows": 3, "solution": [ { "account": "Rent Expense", "debit": 1200 }, { "account": "Cash", "credit": 1200 }, { "account": "Paid rent.", "isExplanation": true } ] },
        { "date": "Mar 30", "description": "Sold 50 units for cash ₱60.", "rows": 3, "solution": [ { "account": "Cash", "debit": 3000 }, { "account": "Sales", "credit": 3000 }, { "account": "Cash sale.", "isExplanation": true } ] },
        { "date": "Mar 31", "description": "Owner withdrew ₱500.", "rows": 3, "solution": [ { "account": "Owner's Drawings", "debit": 500 }, { "account": "Cash", "credit": 500 }, { "account": "Withdrawal.", "isExplanation": true } ] }
      ],
      "type": "Journalizing"
    }
  },
  {
    "FABM1-Merch-Period-FIFO-004": {
      "id": "set4_periodic_fifo",
      "instructions": "Journalize the transactions using Periodic Inventory System and FIFO Costing. Use the following accounts: Accounts Payable, Accounts Receivable, Cash, Purchases, Purchase Returns and Allowances, Purchase Discounts, Freight In, Freight Out, Sales, Sales Returns and Allowances, Sales Discounts, Advertising Expense, Owner's Capital, Owner's Drawings.",
      "subject": "FABM1",
      "title": "Set 4: FIFO Costing (Periodic)",
      "topic": "Journalizing - Merchandising Business Transactions",
      "transactions": [
        { "date": "Apr 1", "description": "Owner invested ₱60,000 cash.", "rows": 3, "solution": [ { "account": "Cash", "debit": 60000 }, { "account": "Owner's Capital", "credit": 60000 }, { "account": "Initial investment.", "isExplanation": true } ] },
        { "date": "Apr 2", "description": "Purchased 400 units @ ₱10, terms 2/10, n/30.", "rows": 3, "solution": [ { "account": "Purchases", "debit": 4000 }, { "account": "Accounts Payable", "credit": 4000 }, { "account": "Purchased 400 units.", "isExplanation": true } ] },
        { "date": "Apr 3", "description": "Paid freight in ₱100.", "rows": 3, "solution": [ { "account": "Freight In", "debit": 100 }, { "account": "Cash", "credit": 100 }, { "account": "Paid freight in.", "isExplanation": true } ] },
        { "date": "Apr 5", "description": "Returned 20 units to supplier (₱10 credit).", "rows": 3, "solution": [ { "account": "Accounts Payable", "debit": 200 }, { "account": "Purchase Returns and Allowances", "credit": 200 }, { "account": "Returned goods.", "isExplanation": true } ] },
        { "date": "Apr 8", "description": "Sold 200 units @ ₱25.", "rows": 3, "solution": [ { "account": "Accounts Receivable", "debit": 5000 }, { "account": "Sales", "credit": 5000 }, { "account": "Sold 200 units.", "isExplanation": true } ] },
        { "date": "Apr 10", "description": "Paid freight out ₱50.", "rows": 3, "solution": [ { "account": "Freight Out", "debit": 50 }, { "account": "Cash", "credit": 50 }, { "account": "Paid freight out.", "isExplanation": true } ] },
        { "date": "Apr 12", "description": "Paid supplier balance within discount period. (Bal 3800 * .98).", "rows": 4, "solution": [ { "account": "Accounts Payable", "debit": 3800 }, { "account": "Purchase Discounts", "credit": 76 }, { "account": "Cash", "credit": 3724 }, { "account": "Paid with discount.", "isExplanation": true } ] },
        { "date": "Apr 15", "description": "Purchased 300 units @ ₱12.", "rows": 3, "solution": [ { "account": "Purchases", "debit": 3600 }, { "account": "Accounts Payable", "credit": 3600 }, { "account": "Purchased 300 units.", "isExplanation": true } ] },
        { "date": "Apr 17", "description": "Sold 300 units @ ₱28.", "rows": 3, "solution": [ { "account": "Accounts Receivable", "debit": 8400 }, { "account": "Sales", "credit": 8400 }, { "account": "Sold 300 units.", "isExplanation": true } ] },
        { "date": "Apr 19", "description": "Customer returned 10 units from Apr 17 sale.", "rows": 3, "solution": [ { "account": "Sales Returns and Allowances", "debit": 280 }, { "account": "Accounts Receivable", "credit": 280 }, { "account": "Customer return.", "isExplanation": true } ] },
        { "date": "Apr 21", "description": "Paid Advertising ₱200.", "rows": 3, "solution": [ { "account": "Advertising Expense", "debit": 200 }, { "account": "Cash", "credit": 200 }, { "account": "Paid advertising.", "isExplanation": true } ] },
        { "date": "Apr 23", "description": "Collected from Apr 8 customer.", "rows": 3, "solution": [ { "account": "Cash", "debit": 5000 }, { "account": "Accounts Receivable", "credit": 5000 }, { "account": "Collection.", "isExplanation": true } ] },
        { "date": "Apr 26", "description": "Purchased 100 units @ ₱15.", "rows": 3, "solution": [ { "account": "Purchases", "debit": 1500 }, { "account": "Accounts Payable", "credit": 1500 }, { "account": "Purchased 100 units.", "isExplanation": true } ] },
        { "date": "Apr 28", "description": "Paid supplier for Apr 15 purchase.", "rows": 3, "solution": [ { "account": "Accounts Payable", "debit": 3600 }, { "account": "Cash", "credit": 3600 }, { "account": "Paid account.", "isExplanation": true } ] },
        { "date": "Apr 30", "description": "Owner withdrew ₱1,500.", "rows": 3, "solution": [ { "account": "Owner's Drawings", "debit": 1500 }, { "account": "Cash", "credit": 1500 }, { "account": "Withdrawal.", "isExplanation": true } ] }
      ],
      "type": "Journalizing"
    }
  },
  {
    "FABM1-Merch-Period-FIFO-005": {
      "id": "set5_periodic_fifo",
      "instructions": "Journalize the transactions using Periodic Inventory System and FIFO Costing. Use the following accounts: Accounts Payable, Accounts Receivable, Cash, Purchases, Purchase Returns and Allowances, Purchase Discounts, Freight In, Freight Out, Sales, Sales Returns and Allowances, Sales Discounts, Supplies, Owner's Capital, Owner's Drawings, Salaries Expense, Utilities Expense.",
      "subject": "FABM1",
      "title": "Set 5: FIFO Costing (Periodic)",
      "topic": "Journalizing - Merchandising Business Transactions",
      "transactions": [
        { "date": "May 1", "description": "Purchased 100 units at ₱10 each.", "rows": 3, "solution": [ { "account": "Purchases", "debit": 1000 }, { "account": "Accounts Payable", "credit": 1000 }, { "account": "Purchased 100 units.", "isExplanation": true } ] },
        { "date": "May 3", "description": "Purchased 100 units at ₱12 each.", "rows": 3, "solution": [ { "account": "Purchases", "debit": 1200 }, { "account": "Accounts Payable", "credit": 1200 }, { "account": "Purchased 100 units.", "isExplanation": true } ] },
        { "date": "May 5", "description": "Sold 150 units for ₱20 each.", "rows": 3, "solution": [ { "account": "Accounts Receivable", "debit": 3000 }, { "account": "Sales", "credit": 3000 }, { "account": "Sold 150 units.", "isExplanation": true } ] },
        { "date": "May 8", "description": "Returned 10 defective units from May 3 purchase (Supplier grants ₱12 credit).", "rows": 3, "solution": [ { "account": "Accounts Payable", "debit": 120 }, { "account": "Purchase Returns and Allowances", "credit": 120 }, { "account": "Returned goods.", "isExplanation": true } ] },
        { "date": "May 10", "description": "Purchased 60 units at ₱13.25 each.", "rows": 3, "solution": [ { "account": "Purchases", "debit": 795 }, { "account": "Accounts Payable", "credit": 795 }, { "account": "Purchased 60 units.", "isExplanation": true } ] },
        { "date": "May 12", "description": "Paid freight ₱25 on May 10 purchase.", "rows": 3, "solution": [ { "account": "Freight In", "debit": 25 }, { "account": "Cash", "credit": 25 }, { "account": "Paid freight.", "isExplanation": true } ] },
        { "date": "May 15", "description": "Sold 80 units for ₱25 each.", "rows": 3, "solution": [ { "account": "Accounts Receivable", "debit": 2000 }, { "account": "Sales", "credit": 2000 }, { "account": "Sold 80 units.", "isExplanation": true } ] },
        { "date": "May 20", "description": "Customer returned 10 units from May 15 sale.", "rows": 3, "solution": [ { "account": "Sales Returns and Allowances", "debit": 250 }, { "account": "Accounts Receivable", "credit": 250 }, { "account": "Customer return.", "isExplanation": true } ] },
        { "date": "May 22", "description": "Paid supplier for May 1 purchase in full.", "rows": 3, "solution": [ { "account": "Accounts Payable", "debit": 1000 }, { "account": "Cash", "credit": 1000 }, { "account": "Payment.", "isExplanation": true } ] },
        { "date": "May 24", "description": "Paid freight out ₱50 on May 15 sale.", "rows": 3, "solution": [ { "account": "Freight Out", "debit": 50 }, { "account": "Cash", "credit": 50 }, { "account": "Delivery expense.", "isExplanation": true } ] },
        { "date": "May 25", "description": "Purchased Supplies ₱100 cash (Not merchandise).", "rows": 3, "solution": [ { "account": "Supplies", "debit": 100 }, { "account": "Cash", "credit": 100 }, { "account": "Supplies purchase.", "isExplanation": true } ] },
        { "date": "May 28", "description": "Owner withdrew ₱500.", "rows": 3, "solution": [ { "account": "Owner's Drawings", "debit": 500 }, { "account": "Cash", "credit": 500 }, { "account": "Withdrawal.", "isExplanation": true } ] },
        { "date": "May 29", "description": "Received payment from May 15 customer within discount (Terms 2/10).", "rows": 4, "solution": [ { "account": "Cash", "debit": 1715 }, { "account": "Sales Discounts", "debit": 35 }, { "account": "Accounts Receivable", "credit": 1750 }, { "account": "Collection.", "isExplanation": true } ] },
        { "date": "May 30", "description": "Paid salaries ₱500.", "rows": 3, "solution": [ { "account": "Salaries Expense", "debit": 500 }, { "account": "Cash", "credit": 500 }, { "account": "Expense.", "isExplanation": true } ] },
        { "date": "May 31", "description": "Sold remaining 30 units for cash ₱30 each.", "rows": 3, "solution": [ { "account": "Cash", "debit": 900 }, { "account": "Sales", "credit": 900 }, { "account": "Cash sale.", "isExplanation": true } ] }
      ],
      "type": "Journalizing"
    }
  },
  {
    "FABM1-Merch-Period-FIFO-006": {
      "id": "set6_periodic_fifo",
      "instructions": "Journalize the transactions using Periodic Inventory System and FIFO Costing. Use the following accounts: Cash, Accounts Receivable, Purchases, Purchase Returns and Allowances, Purchase Discounts, Freight In, Freight Out, Sales, Sales Returns and Allowances, Sales Discounts, Accounts Payable, Owner's Capital, Owner's Drawings, Rent Expense, Salaries Expense.",
      "subject": "FABM1",
      "title": "Set 6: Periodic Inventory (FIFO)",
      "topic": "Journalizing - Merchandising Business Transactions",
      "transactions": [
        { "date": "Jun 1", "description": "Owner invested ₱100,000 cash.", "rows": 3, "solution": [ { "account": "Cash", "debit": 100000 }, { "account": "Owner's Capital", "credit": 100000 }, { "account": "Investment.", "isExplanation": true } ] },
        { "date": "Jun 2", "description": "Purchased goods on account ₱10,000, terms 2/10, n/30.", "rows": 3, "solution": [ { "account": "Purchases", "debit": 10000 }, { "account": "Accounts Payable", "credit": 10000 }, { "account": "Purchase.", "isExplanation": true } ] },
        { "date": "Jun 3", "description": "Paid freight in ₱200.", "rows": 3, "solution": [ { "account": "Freight In", "debit": 200 }, { "account": "Cash", "credit": 200 }, { "account": "Freight.", "isExplanation": true } ] },
        { "date": "Jun 5", "description": "Returned ₱500 of goods to supplier.", "rows": 3, "solution": [ { "account": "Accounts Payable", "debit": 500 }, { "account": "Purchase Returns and Allowances", "credit": 500 }, { "account": "Return.", "isExplanation": true } ] },
        { "date": "Jun 8", "description": "Sold goods on account ₱5,000.", "rows": 3, "solution": [ { "account": "Accounts Receivable", "debit": 5000 }, { "account": "Sales", "credit": 5000 }, { "account": "Sale.", "isExplanation": true } ] },
        { "date": "Jun 10", "description": "Paid freight out ₱100.", "rows": 3, "solution": [ { "account": "Freight Out", "debit": 100 }, { "account": "Cash", "credit": 100 }, { "account": "Delivery.", "isExplanation": true } ] },
        { "date": "Jun 12", "description": "Paid supplier in full (with discount).", "rows": 4, "solution": [ { "account": "Accounts Payable", "debit": 9500 }, { "account": "Purchase Discounts", "credit": 190 }, { "account": "Cash", "credit": 9310 }, { "account": "Payment.", "isExplanation": true } ] },
        { "date": "Jun 15", "description": "Customer returned ₱200 of goods.", "rows": 3, "solution": [ { "account": "Sales Returns and Allowances", "debit": 200 }, { "account": "Accounts Receivable", "credit": 200 }, { "account": "Return.", "isExplanation": true } ] },
        { "date": "Jun 18", "description": "Collected from customer (no discount).", "rows": 3, "solution": [ { "account": "Cash", "debit": 4800 }, { "account": "Accounts Receivable", "credit": 4800 }, { "account": "Collection.", "isExplanation": true } ] },
        { "date": "Jun 20", "description": "Purchased goods cash ₱2,000.", "rows": 3, "solution": [ { "account": "Purchases", "debit": 2000 }, { "account": "Cash", "credit": 2000 }, { "account": "Cash purchase.", "isExplanation": true } ] },
        { "date": "Jun 25", "description": "Sold goods cash ₱3,000.", "rows": 3, "solution": [ { "account": "Cash", "debit": 3000 }, { "account": "Sales", "credit": 3000 }, { "account": "Cash sale.", "isExplanation": true } ] },
        { "date": "Jun 28", "description": "Paid Rent ₱1,500.", "rows": 3, "solution": [ { "account": "Rent Expense", "debit": 1500 }, { "account": "Cash", "credit": 1500 }, { "account": "Rent.", "isExplanation": true } ] },
        { "date": "Jun 29", "description": "Paid Salaries ₱2,000.", "rows": 3, "solution": [ { "account": "Salaries Expense", "debit": 2000 }, { "account": "Cash", "credit": 2000 }, { "account": "Salaries.", "isExplanation": true } ] },
        { "date": "Jun 30", "description": "Owner withdrew ₱1,000.", "rows": 3, "solution": [ { "account": "Owner's Drawings", "debit": 1000 }, { "account": "Cash", "credit": 1000 }, { "account": "Withdrawal.", "isExplanation": true } ] },
        { "date": "Jun 30", "description": "Purchased goods on account ₱5,000.", "rows": 3, "solution": [ { "account": "Purchases", "debit": 5000 }, { "account": "Accounts Payable", "credit": 5000 }, { "account": "Purchase.", "isExplanation": true } ] }
      ],
      "type": "Journalizing"
    }
  },
  {
    "FABM1-Merch-Period-FIFO-007": {
      "id": "set7_periodic_fifo",
      "instructions": "Journalize the transactions using Periodic Inventory System and FIFO Costing. Use the following accounts: Cash, Accounts Receivable, Purchases, Purchase Returns and Allowances, Purchase Discounts, Freight In, Freight Out, Sales, Sales Returns and Allowances, Sales Discounts, Accounts Payable, Owner's Capital, Advertising Expense, Utilities Expense.",
      "subject": "FABM1",
      "title": "Set 7: Periodic Inventory (FIFO)",
      "topic": "Journalizing - Merchandising Business Transactions",
      "transactions": [
        { "date": "Jul 1", "description": "Owner invested ₱60,000 cash.", "rows": 3, "solution": [ { "account": "Cash", "debit": 60000 }, { "account": "Owner's Capital", "credit": 60000 }, { "account": "Investment.", "isExplanation": true } ] },
        { "date": "Jul 2", "description": "Purchased merchandise ₱8,000, terms 2/10, n/30.", "rows": 3, "solution": [ { "account": "Purchases", "debit": 8000 }, { "account": "Accounts Payable", "credit": 8000 }, { "account": "Purchase.", "isExplanation": true } ] },
        { "date": "Jul 3", "description": "Paid freight in ₱150.", "rows": 3, "solution": [ { "account": "Freight In", "debit": 150 }, { "account": "Cash", "credit": 150 }, { "account": "Freight.", "isExplanation": true } ] },
        { "date": "Jul 5", "description": "Returned goods ₱400.", "rows": 3, "solution": [ { "account": "Accounts Payable", "debit": 400 }, { "account": "Purchase Returns and Allowances", "credit": 400 }, { "account": "Return.", "isExplanation": true } ] },
        { "date": "Jul 7", "description": "Sold merchandise ₱4,000, terms 1/10, n/30.", "rows": 3, "solution": [ { "account": "Accounts Receivable", "debit": 4000 }, { "account": "Sales", "credit": 4000 }, { "account": "Sale.", "isExplanation": true } ] },
        { "date": "Jul 8", "description": "Paid freight out ₱100.", "rows": 3, "solution": [ { "account": "Freight Out", "debit": 100 }, { "account": "Cash", "credit": 100 }, { "account": "Delivery.", "isExplanation": true } ] },
        { "date": "Jul 12", "description": "Paid supplier in full (with discount).", "rows": 4, "solution": [ { "account": "Accounts Payable", "debit": 7600 }, { "account": "Purchase Discounts", "credit": 152 }, { "account": "Cash", "credit": 7448 }, { "account": "Payment.", "isExplanation": true } ] },
        { "date": "Jul 15", "description": "Received return from customer ₱300.", "rows": 3, "solution": [ { "account": "Sales Returns and Allowances", "debit": 300 }, { "account": "Accounts Receivable", "credit": 300 }, { "account": "Return.", "isExplanation": true } ] },
        { "date": "Jul 17", "description": "Collected from customer (with discount).", "rows": 4, "solution": [ { "account": "Cash", "debit": 3663 }, { "account": "Sales Discounts", "debit": 37 }, { "account": "Accounts Receivable", "credit": 3700 }, { "account": "Collection.", "isExplanation": true } ] },
        { "date": "Jul 20", "description": "Purchased goods cash ₱1,500.", "rows": 3, "solution": [ { "account": "Purchases", "debit": 1500 }, { "account": "Cash", "credit": 1500 }, { "account": "Cash purchase.", "isExplanation": true } ] },
        { "date": "Jul 22", "description": "Sold goods cash ₱2,000.", "rows": 3, "solution": [ { "account": "Cash", "debit": 2000 }, { "account": "Sales", "credit": 2000 }, { "account": "Cash sale.", "isExplanation": true } ] },
        { "date": "Jul 25", "description": "Paid advertising ₱500.", "rows": 3, "solution": [ { "account": "Advertising Expense", "debit": 500 }, { "account": "Cash", "credit": 500 }, { "account": "Advertising.", "isExplanation": true } ] },
        { "date": "Jul 28", "description": "Paid utilities ₱600.", "rows": 3, "solution": [ { "account": "Utilities Expense", "debit": 600 }, { "account": "Cash", "credit": 600 }, { "account": "Utilities.", "isExplanation": true } ] },
        { "date": "Jul 30", "description": "Purchased goods ₱3,000 on account.", "rows": 3, "solution": [ { "account": "Purchases", "debit": 3000 }, { "account": "Accounts Payable", "credit": 3000 }, { "account": "Purchase.", "isExplanation": true } ] },
        { "date": "Jul 31", "description": "Returned ₱100 of goods from Jul 30 purchase.", "rows": 3, "solution": [ { "account": "Accounts Payable", "debit": 100 }, { "account": "Purchase Returns and Allowances", "credit": 100 }, { "account": "Return.", "isExplanation": true } ] }
      ],
      "type": "Journalizing"
    }
  },
  {
    "FABM1-Merch-Period-FIFO-008": {
      "id": "set8_periodic_fifo",
      "instructions": "Journalize the transactions using Periodic Inventory System and FIFO Costing. Use the following accounts: Cash, Accounts Receivable, Purchases, Purchase Returns and Allowances, Purchase Discounts, Freight In, Sales, Sales Returns and Allowances, Sales Discounts, Accounts Payable, Owner's Capital, Owner's Drawings, Supplies, Supplies Expense, Rent Expense.",
      "subject": "FABM1",
      "title": "Set 8: Periodic Inventory (FIFO)",
      "topic": "Journalizing - Merchandising Business Transactions",
      "transactions": [
        { "date": "Aug 1", "description": "Owner invested ₱70,000 cash.", "rows": 3, "solution": [ { "account": "Cash", "debit": 70000 }, { "account": "Owner's Capital", "credit": 70000 }, { "account": "Investment.", "isExplanation": true } ] },
        { "date": "Aug 2", "description": "Purchased goods ₱12,000 on account, 2/10, n/30.", "rows": 3, "solution": [ { "account": "Purchases", "debit": 12000 }, { "account": "Accounts Payable", "credit": 12000 }, { "account": "Purchase.", "isExplanation": true } ] },
        { "date": "Aug 3", "description": "Paid freight in ₱300.", "rows": 3, "solution": [ { "account": "Freight In", "debit": 300 }, { "account": "Cash", "credit": 300 }, { "account": "Freight.", "isExplanation": true } ] },
        { "date": "Aug 5", "description": "Returned defective goods ₱600.", "rows": 3, "solution": [ { "account": "Accounts Payable", "debit": 600 }, { "account": "Purchase Returns and Allowances", "credit": 600 }, { "account": "Return.", "isExplanation": true } ] },
        { "date": "Aug 8", "description": "Paid supplier in full (with discount).", "rows": 4, "solution": [ { "account": "Accounts Payable", "debit": 11400 }, { "account": "Purchase Discounts", "credit": 228 }, { "account": "Cash", "credit": 11172 }, { "account": "Payment.", "isExplanation": true } ] },
        { "date": "Aug 10", "description": "Sold goods on account ₱6,000.", "rows": 3, "solution": [ { "account": "Accounts Receivable", "debit": 6000 }, { "account": "Sales", "credit": 6000 }, { "account": "Sale.", "isExplanation": true } ] },
        { "date": "Aug 12", "description": "Purchased supplies ₱500 cash.", "rows": 3, "solution": [ { "account": "Supplies", "debit": 500 }, { "account": "Cash", "credit": 500 }, { "account": "Supplies.", "isExplanation": true } ] },
        { "date": "Aug 15", "description": "Customer returned goods ₱500.", "rows": 3, "solution": [ { "account": "Sales Returns and Allowances", "debit": 500 }, { "account": "Accounts Receivable", "credit": 500 }, { "account": "Return.", "isExplanation": true } ] },
        { "date": "Aug 18", "description": "Collected account in full.", "rows": 3, "solution": [ { "account": "Cash", "debit": 5500 }, { "account": "Accounts Receivable", "credit": 5500 }, { "account": "Collection.", "isExplanation": true } ] },
        { "date": "Aug 20", "description": "Purchased goods ₱4,000 cash.", "rows": 3, "solution": [ { "account": "Purchases", "debit": 4000 }, { "account": "Cash", "credit": 4000 }, { "account": "Purchase.", "isExplanation": true } ] },
        { "date": "Aug 22", "description": "Sold goods ₱3,500 cash.", "rows": 3, "solution": [ { "account": "Cash", "debit": 3500 }, { "account": "Sales", "credit": 3500 }, { "account": "Sale.", "isExplanation": true } ] },
        { "date": "Aug 25", "description": "Owner withdrew ₱2,000.", "rows": 3, "solution": [ { "account": "Owner's Drawings", "debit": 2000 }, { "account": "Cash", "credit": 2000 }, { "account": "Withdrawal.", "isExplanation": true } ] },
        { "date": "Aug 28", "description": "Paid rent ₱1,200.", "rows": 3, "solution": [ { "account": "Rent Expense", "debit": 1200 }, { "account": "Cash", "credit": 1200 }, { "account": "Rent.", "isExplanation": true } ] },
        { "date": "Aug 30", "description": "Adjusting entry: Supplies used ₱200.", "rows": 3, "solution": [ { "account": "Supplies Expense", "debit": 200 }, { "account": "Supplies", "credit": 200 }, { "account": "Adjustment.", "isExplanation": true } ] },
        { "date": "Aug 31", "description": "Sold goods on account ₱2,000.", "rows": 3, "solution": [ { "account": "Accounts Receivable", "debit": 2000 }, { "account": "Sales", "credit": 2000 }, { "account": "Sale.", "isExplanation": true } ] }
      ],
      "type": "Journalizing"
    }
  },
  {
    "FABM1-Merch-Period-FIFO-009": {
      "id": "set9_periodic_fifo",
      "instructions": "Journalize the transactions using Periodic Inventory System and FIFO Costing. Use the following accounts: Cash, Accounts Receivable, Purchases, Purchase Returns and Allowances, Purchase Discounts, Freight In, Sales, Sales Returns and Allowances, Accounts Payable, Owner's Capital, Salaries Expense, Utilities Expense, Equipment, Notes Payable, Interest Expense.",
      "subject": "FABM1",
      "title": "Set 9: Periodic Inventory (FIFO)",
      "topic": "Journalizing - Merchandising Business Transactions",
      "transactions": [
        { "date": "Sep 1", "description": "Owner invested ₱30,000 cash.", "rows": 3, "solution": [ { "account": "Cash", "debit": 30000 }, { "account": "Owner's Capital", "credit": 30000 }, { "account": "Investment.", "isExplanation": true } ] },
        { "date": "Sep 2", "description": "Purchased goods ₱5,000 on account.", "rows": 3, "solution": [ { "account": "Purchases", "debit": 5000 }, { "account": "Accounts Payable", "credit": 5000 }, { "account": "Purchase.", "isExplanation": true } ] },
        { "date": "Sep 3", "description": "Paid freight in ₱100.", "rows": 3, "solution": [ { "account": "Freight In", "debit": 100 }, { "account": "Cash", "credit": 100 }, { "account": "Freight.", "isExplanation": true } ] },
        { "date": "Sep 5", "description": "Returned goods ₱200.", "rows": 3, "solution": [ { "account": "Accounts Payable", "debit": 200 }, { "account": "Purchase Returns and Allowances", "credit": 200 }, { "account": "Return.", "isExplanation": true } ] },
        { "date": "Sep 8", "description": "Sold goods ₱3,000 on account.", "rows": 3, "solution": [ { "account": "Accounts Receivable", "debit": 3000 }, { "account": "Sales", "credit": 3000 }, { "account": "Sale.", "isExplanation": true } ] },
        { "date": "Sep 10", "description": "Received return ₱100 from customer.", "rows": 3, "solution": [ { "account": "Sales Returns and Allowances", "debit": 100 }, { "account": "Accounts Receivable", "credit": 100 }, { "account": "Return.", "isExplanation": true } ] },
        { "date": "Sep 12", "description": "Paid supplier in full (no discount).", "rows": 3, "solution": [ { "account": "Accounts Payable", "debit": 4800 }, { "account": "Cash", "credit": 4800 }, { "account": "Payment.", "isExplanation": true } ] },
        { "date": "Sep 15", "description": "Collected from customer in full.", "rows": 3, "solution": [ { "account": "Cash", "debit": 2900 }, { "account": "Accounts Receivable", "credit": 2900 }, { "account": "Collection.", "isExplanation": true } ] },
        { "date": "Sep 18", "description": "Purchased Equipment ₱10,000 signing a note.", "rows": 3, "solution": [ { "account": "Equipment", "debit": 10000 }, { "account": "Notes Payable", "credit": 10000 }, { "account": "Equipment.", "isExplanation": true } ] },
        { "date": "Sep 20", "description": "Purchased goods ₱2,500 cash.", "rows": 3, "solution": [ { "account": "Purchases", "debit": 2500 }, { "account": "Cash", "credit": 2500 }, { "account": "Purchase.", "isExplanation": true } ] },
        { "date": "Sep 22", "description": "Sold goods ₱4,000 cash.", "rows": 3, "solution": [ { "account": "Cash", "debit": 4000 }, { "account": "Sales", "credit": 4000 }, { "account": "Sale.", "isExplanation": true } ] },
        { "date": "Sep 25", "description": "Paid salaries ₱1,500.", "rows": 3, "solution": [ { "account": "Salaries Expense", "debit": 1500 }, { "account": "Cash", "credit": 1500 }, { "account": "Salaries.", "isExplanation": true } ] },
        { "date": "Sep 28", "description": "Paid utilities ₱500.", "rows": 3, "solution": [ { "account": "Utilities Expense", "debit": 500 }, { "account": "Cash", "credit": 500 }, { "account": "Utilities.", "isExplanation": true } ] },
        { "date": "Sep 30", "description": "Paid interest on note ₱100.", "rows": 3, "solution": [ { "account": "Interest Expense", "debit": 100 }, { "account": "Cash", "credit": 100 }, { "account": "Interest.", "isExplanation": true } ] },
        { "date": "Sep 30", "description": "Sold goods on account ₱1,000.", "rows": 3, "solution": [ { "account": "Accounts Receivable", "debit": 1000 }, { "account": "Sales", "credit": 1000 }, { "account": "Sale.", "isExplanation": true } ] }
      ],
      "type": "Journalizing"
    }
  },
  {
    "FABM1-Merch-Period-FIFO-010": {
      "id": "set10_periodic_fifo",
      "instructions": "Journalize the transactions using Periodic Inventory System and FIFO Costing. Use the following accounts: Cash, Accounts Receivable, Purchases, Purchase Returns and Allowances, Purchase Discounts, Freight In, Sales, Sales Returns and Allowances, Sales Discounts, Accounts Payable, Owner's Capital, Owner's Drawings, Freight Out, Advertising Expense, No Entry.",
      "subject": "FABM1",
      "title": "Set 10: Periodic Inventory (FIFO)",
      "topic": "Journalizing - Merchandising Business Transactions",
      "transactions": [
        { "date": "Oct 1", "description": "Owner invested ₱25,000 cash.", "rows": 3, "solution": [ { "account": "Cash", "debit": 25000 }, { "account": "Owner's Capital", "credit": 25000 }, { "account": "Investment.", "isExplanation": true } ] },
        { "date": "Oct 2", "description": "Purchased goods ₱7,000 on account, 1/10, n/30.", "rows": 3, "solution": [ { "account": "Purchases", "debit": 7000 }, { "account": "Accounts Payable", "credit": 7000 }, { "account": "Purchase.", "isExplanation": true } ] },
        { "date": "Oct 3", "description": "Paid freight in ₱150.", "rows": 3, "solution": [ { "account": "Freight In", "debit": 150 }, { "account": "Cash", "credit": 150 }, { "account": "Freight.", "isExplanation": true } ] },
        { "date": "Oct 5", "description": "Sold goods ₱3,000 on account.", "rows": 3, "solution": [ { "account": "Accounts Receivable", "debit": 3000 }, { "account": "Sales", "credit": 3000 }, { "account": "Sale.", "isExplanation": true } ] },
        { "date": "Oct 6", "description": "Paid freight out ₱100.", "rows": 3, "solution": [ { "account": "Freight Out", "debit": 100 }, { "account": "Cash", "credit": 100 }, { "account": "Delivery.", "isExplanation": true } ] },
        { "date": "Oct 8", "description": "Returned ₱200 goods to supplier.", "rows": 3, "solution": [ { "account": "Accounts Payable", "debit": 200 }, { "account": "Purchase Returns and Allowances", "credit": 200 }, { "account": "Return.", "isExplanation": true } ] },
        { "date": "Oct 12", "description": "Paid supplier in full (with discount).", "rows": 4, "solution": [ { "account": "Accounts Payable", "debit": 6800 }, { "account": "Purchase Discounts", "credit": 68 }, { "account": "Cash", "credit": 6732 }, { "account": "Payment.", "isExplanation": true } ] },
        { "date": "Oct 15", "description": "Sold goods cash ₱1,500.", "rows": 3, "solution": [ { "account": "Cash", "debit": 1500 }, { "account": "Sales", "credit": 1500 }, { "account": "Sale.", "isExplanation": true } ] },
        { "date": "Oct 17", "description": "Return from customer ₱100 (from Oct 5 sale).", "rows": 3, "solution": [ { "account": "Sales Returns and Allowances", "debit": 100 }, { "account": "Accounts Receivable", "credit": 100 }, { "account": "Return.", "isExplanation": true } ] },
        { "date": "Oct 20", "description": "Collected from customer in full.", "rows": 3, "solution": [ { "account": "Cash", "debit": 2900 }, { "account": "Accounts Receivable", "credit": 2900 }, { "account": "Collection.", "isExplanation": true } ] },
        { "date": "Oct 22", "description": "Purchased goods cash ₱2,000.", "rows": 3, "solution": [ { "account": "Purchases", "debit": 2000 }, { "account": "Cash", "credit": 2000 }, { "account": "Purchase.", "isExplanation": true } ] },
        { "date": "Oct 25", "description": "Paid advertising ₱300.", "rows": 3, "solution": [ { "account": "Advertising Expense", "debit": 300 }, { "account": "Cash", "credit": 300 }, { "account": "Advertising.", "isExplanation": true } ] },
        { "date": "Oct 28", "description": "Owner withdrew ₱500.", "rows": 3, "solution": [ { "account": "Owner's Drawings", "debit": 500 }, { "account": "Cash", "credit": 500 }, { "account": "Withdrawal.", "isExplanation": true } ] },
        { "date": "Oct 30", "description": "Purchased goods ₱3,000 on account.", "rows": 3, "solution": [ { "account": "Purchases", "debit": 3000 }, { "account": "Accounts Payable", "credit": 3000 }, { "account": "Purchase.", "isExplanation": true } ] },
        { "date": "Oct 31", "description": "Recorded inventory shrinkage (Periodic - No Entry).", "rows": 0, "solution": [ { "account": "No Entry", "debit": "" }, { "account": "No entry.", "isExplanation": true } ] }
      ],
      "type": "Journalizing"
    }
  },
  {
    "FABM1-Merch-Period-FIFO-011": {
      "id": "set11_periodic_fifo",
      "instructions": "Journalize the transactions using Periodic Inventory System and FIFO Costing. Use the following accounts: Cash, Accounts Receivable, Purchases, Purchase Returns and Allowances, Purchase Discounts, Freight In, Freight Out, Sales, Sales Returns and Allowances, Accounts Payable, Owner's Capital, Insurance Expense, Salaries Expense, Prepaid Insurance.",
      "subject": "FABM1",
      "title": "Set 11: Periodic Inventory (FIFO)",
      "topic": "Journalizing - Merchandising Business Transactions",
      "transactions": [
        { "date": "Nov 1", "description": "Owner invested ₱40,000 cash.", "rows": 3, "solution": [ { "account": "Cash", "debit": 40000 }, { "account": "Owner's Capital", "credit": 40000 }, { "account": "Investment.", "isExplanation": true } ] },
        { "date": "Nov 2", "description": "Purchased goods ₱8,000 on account, 2/10, n/30.", "rows": 3, "solution": [ { "account": "Purchases", "debit": 8000 }, { "account": "Accounts Payable", "credit": 8000 }, { "account": "Purchase.", "isExplanation": true } ] },
        { "date": "Nov 3", "description": "Paid freight in ₱200.", "rows": 3, "solution": [ { "account": "Freight In", "debit": 200 }, { "account": "Cash", "credit": 200 }, { "account": "Freight.", "isExplanation": true } ] },
        { "date": "Nov 5", "description": "Returned goods ₱300.", "rows": 3, "solution": [ { "account": "Accounts Payable", "debit": 300 }, { "account": "Purchase Returns and Allowances", "credit": 300 }, { "account": "Return.", "isExplanation": true } ] },
        { "date": "Nov 8", "description": "Sold goods on account ₱4,000.", "rows": 3, "solution": [ { "account": "Accounts Receivable", "debit": 4000 }, { "account": "Sales", "credit": 4000 }, { "account": "Sale.", "isExplanation": true } ] },
        { "date": "Nov 10", "description": "Paid freight out ₱100.", "rows": 3, "solution": [ { "account": "Freight Out", "debit": 100 }, { "account": "Cash", "credit": 100 }, { "account": "Delivery.", "isExplanation": true } ] },
        { "date": "Nov 12", "description": "Paid supplier in full (with discount).", "rows": 4, "solution": [ { "account": "Accounts Payable", "debit": 7700 }, { "account": "Purchase Discounts", "credit": 154 }, { "account": "Cash", "credit": 7546 }, { "account": "Payment.", "isExplanation": true } ] },
        { "date": "Nov 15", "description": "Sold goods cash ₱2,000.", "rows": 3, "solution": [ { "account": "Cash", "debit": 2000 }, { "account": "Sales", "credit": 2000 }, { "account": "Sale.", "isExplanation": true } ] },
        { "date": "Nov 18", "description": "Customer returned goods ₱200 (cash refund).", "rows": 3, "solution": [ { "account": "Sales Returns and Allowances", "debit": 200 }, { "account": "Cash", "credit": 200 }, { "account": "Refund.", "isExplanation": true } ] },
        { "date": "Nov 20", "description": "Collected from account customer.", "rows": 3, "solution": [ { "account": "Cash", "debit": 4000 }, { "account": "Accounts Receivable", "credit": 4000 }, { "account": "Collection.", "isExplanation": true } ] },
        { "date": "Nov 22", "description": "Purchased goods cash ₱3,000.", "rows": 3, "solution": [ { "account": "Purchases", "debit": 3000 }, { "account": "Cash", "credit": 3000 }, { "account": "Purchase.", "isExplanation": true } ] },
        { "date": "Nov 25", "description": "Purchased 1-year insurance ₱1,200.", "rows": 3, "solution": [ { "account": "Prepaid Insurance", "debit": 1200 }, { "account": "Cash", "credit": 1200 }, { "account": "Insurance.", "isExplanation": true } ] },
        { "date": "Nov 28", "description": "Paid Salaries ₱1,500.", "rows": 3, "solution": [ { "account": "Salaries Expense", "debit": 1500 }, { "account": "Cash", "credit": 1500 }, { "account": "Salaries.", "isExplanation": true } ] },
        { "date": "Nov 30", "description": "Recorded expired insurance ₱100.", "rows": 3, "solution": [ { "account": "Insurance Expense", "debit": 100 }, { "account": "Prepaid Insurance", "credit": 100 }, { "account": "Adjustment.", "isExplanation": true } ] },
        { "date": "Nov 30", "description": "Sold goods on account ₱1,500.", "rows": 3, "solution": [ { "account": "Accounts Receivable", "debit": 1500 }, { "account": "Sales", "credit": 1500 }, { "account": "Sale.", "isExplanation": true } ] }
      ],
      "type": "Journalizing"
    }
  },
  {
    "FABM1-Merch-Period-FIFO-012": {
      "id": "set12_periodic_fifo",
      "instructions": "Journalize the transactions using Periodic Inventory System and FIFO Costing. Use the following accounts: Cash, Accounts Receivable, Purchases, Purchase Returns and Allowances, Purchase Discounts, Freight In, Sales, Sales Returns and Allowances, Sales Discounts, Accounts Payable, Owner's Capital, Owner's Drawings, Utilities Expense, Rent Expense, No Entry.",
      "subject": "FABM1",
      "title": "Set 12: Periodic Inventory (FIFO)",
      "topic": "Journalizing - Merchandising Business Transactions",
      "transactions": [
        { "date": "Dec 1", "description": "Owner invested ₱45,000 cash.", "rows": 3, "solution": [ { "account": "Cash", "debit": 45000 }, { "account": "Owner's Capital", "credit": 45000 }, { "account": "Investment.", "isExplanation": true } ] },
        { "date": "Dec 2", "description": "Purchased goods ₱9,000 on account.", "rows": 3, "solution": [ { "account": "Purchases", "debit": 9000 }, { "account": "Accounts Payable", "credit": 9000 }, { "account": "Purchase.", "isExplanation": true } ] },
        { "date": "Dec 3", "description": "Paid freight in ₱250.", "rows": 3, "solution": [ { "account": "Freight In", "debit": 250 }, { "account": "Cash", "credit": 250 }, { "account": "Freight.", "isExplanation": true } ] },
        { "date": "Dec 5", "description": "Sold goods ₱4,500 on account, 2/10, n/30.", "rows": 3, "solution": [ { "account": "Accounts Receivable", "debit": 4500 }, { "account": "Sales", "credit": 4500 }, { "account": "Sale.", "isExplanation": true } ] },
        { "date": "Dec 7", "description": "Returned goods to supplier ₱400.", "rows": 3, "solution": [ { "account": "Accounts Payable", "debit": 400 }, { "account": "Purchase Returns and Allowances", "credit": 400 }, { "account": "Return.", "isExplanation": true } ] },
        { "date": "Dec 9", "description": "Customer returned goods ₱300.", "rows": 3, "solution": [ { "account": "Sales Returns and Allowances", "debit": 300 }, { "account": "Accounts Receivable", "credit": 300 }, { "account": "Return.", "isExplanation": true } ] },
        { "date": "Dec 12", "description": "Paid supplier in full (no discount terms).", "rows": 3, "solution": [ { "account": "Accounts Payable", "debit": 8600 }, { "account": "Cash", "credit": 8600 }, { "account": "Payment.", "isExplanation": true } ] },
        { "date": "Dec 15", "description": "Collected from customer within discount.", "rows": 4, "solution": [ { "account": "Cash", "debit": 4116 }, { "account": "Sales Discounts", "debit": 84 }, { "account": "Accounts Receivable", "credit": 4200 }, { "account": "Collection.", "isExplanation": true } ] },
        { "date": "Dec 18", "description": "Purchased goods cash ₱3,500.", "rows": 3, "solution": [ { "account": "Purchases", "debit": 3500 }, { "account": "Cash", "credit": 3500 }, { "account": "Purchase.", "isExplanation": true } ] },
        { "date": "Dec 20", "description": "Sold goods cash ₱2,500.", "rows": 3, "solution": [ { "account": "Cash", "debit": 2500 }, { "account": "Sales", "credit": 2500 }, { "account": "Sale.", "isExplanation": true } ] },
        { "date": "Dec 22", "description": "Owner withdrew ₱800.", "rows": 3, "solution": [ { "account": "Owner's Drawings", "debit": 800 }, { "account": "Cash", "credit": 800 }, { "account": "Withdrawal.", "isExplanation": true } ] },
        { "date": "Dec 25", "description": "Paid utilities ₱450.", "rows": 3, "solution": [ { "account": "Utilities Expense", "debit": 450 }, { "account": "Cash", "credit": 450 }, { "account": "Utilities.", "isExplanation": true } ] },
        { "date": "Dec 28", "description": "Paid rent ₱1,000.", "rows": 3, "solution": [ { "account": "Rent Expense", "debit": 1000 }, { "account": "Cash", "credit": 1000 }, { "account": "Rent.", "isExplanation": true } ] },
        { "date": "Dec 30", "description": "Purchased goods on account ₱2,000.", "rows": 3, "solution": [ { "account": "Purchases", "debit": 2000 }, { "account": "Accounts Payable", "credit": 2000 }, { "account": "Purchase.", "isExplanation": true } ] },
        { "date": "Dec 31", "description": "Shrinkage check (Periodic - No Entry).", "rows": 0, "solution": [ { "account": "No Entry", "debit": "" }, { "account": "No entry.", "isExplanation": true } ] }
      ],
      "type": "Journalizing"
    }
  },
  {
    "FABM1-Merch-Period-FIFO-013": {
      "id": "set13_periodic_fifo",
      "instructions": "Journalize the transactions using Periodic Inventory System and FIFO Costing. Use the following accounts: Cash, Accounts Receivable, Purchases, Purchase Returns and Allowances, Purchase Discounts, Freight In, Sales, Sales Returns and Allowances, Sales Discounts, Accounts Payable, Owner's Capital, Owner's Drawings, Salaries Expense, Utilities Expense, Supplies.",
      "subject": "FABM1",
      "title": "Set 13: Periodic Inventory (FIFO)",
      "topic": "Journalizing - Merchandising Business Transactions",
      "transactions": [
        { "date": "Jan 1", "description": "Owner invested ₱35,000 cash.", "rows": 3, "solution": [ { "account": "Cash", "debit": 35000 }, { "account": "Owner's Capital", "credit": 35000 }, { "account": "Investment.", "isExplanation": true } ] },
        { "date": "Jan 2", "description": "Purchased goods ₱6,000 on account, 1/15, n/30.", "rows": 3, "solution": [ { "account": "Purchases", "debit": 6000 }, { "account": "Accounts Payable", "credit": 6000 }, { "account": "Purchase.", "isExplanation": true } ] },
        { "date": "Jan 3", "description": "Paid freight in ₱120.", "rows": 3, "solution": [ { "account": "Freight In", "debit": 120 }, { "account": "Cash", "credit": 120 }, { "account": "Freight.", "isExplanation": true } ] },
        { "date": "Jan 5", "description": "Returned ₱300 goods to supplier.", "rows": 3, "solution": [ { "account": "Accounts Payable", "debit": 300 }, { "account": "Purchase Returns and Allowances", "credit": 300 }, { "account": "Return.", "isExplanation": true } ] },
        { "date": "Jan 8", "description": "Sold goods ₱4,000 on account.", "rows": 3, "solution": [ { "account": "Accounts Receivable", "debit": 4000 }, { "account": "Sales", "credit": 4000 }, { "account": "Sale.", "isExplanation": true } ] },
        { "date": "Jan 10", "description": "Paid supplier in full (with discount).", "rows": 4, "solution": [ { "account": "Accounts Payable", "debit": 5700 }, { "account": "Purchase Discounts", "credit": 57 }, { "account": "Cash", "credit": 5643 }, { "account": "Payment.", "isExplanation": true } ] },
        { "date": "Jan 12", "description": "Customer returned goods ₱200.", "rows": 3, "solution": [ { "account": "Sales Returns and Allowances", "debit": 200 }, { "account": "Accounts Receivable", "credit": 200 }, { "account": "Return.", "isExplanation": true } ] },
        { "date": "Jan 15", "description": "Collected from customer in full.", "rows": 3, "solution": [ { "account": "Cash", "debit": 3800 }, { "account": "Accounts Receivable", "credit": 3800 }, { "account": "Collection.", "isExplanation": true } ] },
        { "date": "Jan 18", "description": "Purchased supplies ₱300 cash.", "rows": 3, "solution": [ { "account": "Supplies", "debit": 300 }, { "account": "Cash", "credit": 300 }, { "account": "Supplies.", "isExplanation": true } ] },
        { "date": "Jan 20", "description": "Sold goods cash ₱1,800.", "rows": 3, "solution": [ { "account": "Cash", "debit": 1800 }, { "account": "Sales", "credit": 1800 }, { "account": "Sale.", "isExplanation": true } ] },
        { "date": "Jan 22", "description": "Purchased goods ₱2,000 cash.", "rows": 3, "solution": [ { "account": "Purchases", "debit": 2000 }, { "account": "Cash", "credit": 2000 }, { "account": "Purchase.", "isExplanation": true } ] },
        { "date": "Jan 25", "description": "Paid Salaries ₱1,000.", "rows": 3, "solution": [ { "account": "Salaries Expense", "debit": 1000 }, { "account": "Cash", "credit": 1000 }, { "account": "Salaries.", "isExplanation": true } ] },
        { "date": "Jan 28", "description": "Owner withdrew ₱600.", "rows": 3, "solution": [ { "account": "Owner's Drawings", "debit": 600 }, { "account": "Cash", "credit": 600 }, { "account": "Withdrawal.", "isExplanation": true } ] },
        { "date": "Jan 30", "description": "Paid utilities ₱350.", "rows": 3, "solution": [ { "account": "Utilities Expense", "debit": 350 }, { "account": "Cash", "credit": 350 }, { "account": "Utilities.", "isExplanation": true } ] },
        { "date": "Jan 31", "description": "Sold goods on account ₱1,200.", "rows": 3, "solution": [ { "account": "Accounts Receivable", "debit": 1200 }, { "account": "Sales", "credit": 1200 }, { "account": "Sale.", "isExplanation": true } ] }
      ],
      "type": "Journalizing"
    }
  },
  {
    "FABM1-Merch-Period-FIFO-014": {
      "id": "set14_periodic_fifo",
      "instructions": "Journalize the transactions using Periodic Inventory System and FIFO Costing. Use the following accounts: Cash, Accounts Receivable, Purchases, Purchase Returns and Allowances, Purchase Discounts, Freight In, Sales, Sales Returns and Allowances, Sales Discounts, Accounts Payable, Owner's Capital, Owner's Drawings, Advertising Expense, Rent Expense, No Entry.",
      "subject": "FABM1",
      "title": "Set 14: Periodic Inventory (FIFO)",
      "topic": "Journalizing - Merchandising Business Transactions",
      "transactions": [
        { "date": "Feb 1", "description": "Owner invested ₱55,000 cash.", "rows": 3, "solution": [ { "account": "Cash", "debit": 55000 }, { "account": "Owner's Capital", "credit": 55000 }, { "account": "Investment.", "isExplanation": true } ] },
        { "date": "Feb 2", "description": "Purchased goods ₱9,000 on account.", "rows": 3, "solution": [ { "account": "Purchases", "debit": 9000 }, { "account": "Accounts Payable", "credit": 9000 }, { "account": "Purchase.", "isExplanation": true } ] },
        { "date": "Feb 3", "description": "Paid freight in ₱180.", "rows": 3, "solution": [ { "account": "Freight In", "debit": 180 }, { "account": "Cash", "credit": 180 }, { "account": "Freight.", "isExplanation": true } ] },
        { "date": "Feb 5", "description": "Returned goods ₱450.", "rows": 3, "solution": [ { "account": "Accounts Payable", "debit": 450 }, { "account": "Purchase Returns and Allowances", "credit": 450 }, { "account": "Return.", "isExplanation": true } ] },
        { "date": "Feb 8", "description": "Sold goods ₱5,500 on account, 2/10, n/30.", "rows": 3, "solution": [ { "account": "Accounts Receivable", "debit": 5500 }, { "account": "Sales", "credit": 5500 }, { "account": "Sale.", "isExplanation": true } ] },
        { "date": "Feb 10", "description": "Paid supplier in full.", "rows": 3, "solution": [ { "account": "Accounts Payable", "debit": 8550 }, { "account": "Cash", "credit": 8550 }, { "account": "Payment.", "isExplanation": true } ] },
        { "date": "Feb 12", "description": "Customer returned goods ₱250.", "rows": 3, "solution": [ { "account": "Sales Returns and Allowances", "debit": 250 }, { "account": "Accounts Receivable", "credit": 250 }, { "account": "Return.", "isExplanation": true } ] },
        { "date": "Feb 15", "description": "Collected from customer (with discount).", "rows": 4, "solution": [ { "account": "Cash", "debit": 5145 }, { "account": "Sales Discounts", "debit": 105 }, { "account": "Accounts Receivable", "credit": 5250 }, { "account": "Collection.", "isExplanation": true } ] },
        { "date": "Feb 18", "description": "Purchased goods ₱3,500 cash.", "rows": 3, "solution": [ { "account": "Purchases", "debit": 3500 }, { "account": "Cash", "credit": 3500 }, { "account": "Purchase.", "isExplanation": true } ] },
        { "date": "Feb 20", "description": "Sold goods cash ₱2,800.", "rows": 3, "solution": [ { "account": "Cash", "debit": 2800 }, { "account": "Sales", "credit": 2800 }, { "account": "Sale.", "isExplanation": true } ] },
        { "date": "Feb 22", "description": "Paid Advertising ₱400.", "rows": 3, "solution": [ { "account": "Advertising Expense", "debit": 400 }, { "account": "Cash", "credit": 400 }, { "account": "Advertising.", "isExplanation": true } ] },
        { "date": "Feb 25", "description": "Owner withdrew ₱900.", "rows": 3, "solution": [ { "account": "Owner's Drawings", "debit": 900 }, { "account": "Cash", "credit": 900 }, { "account": "Withdrawal.", "isExplanation": true } ] },
        { "date": "Feb 28", "description": "Paid Rent ₱1,100.", "rows": 3, "solution": [ { "account": "Rent Expense", "debit": 1100 }, { "account": "Cash", "credit": 1100 }, { "account": "Rent.", "isExplanation": true } ] },
        { "date": "Feb 28", "description": "Sold goods on account ₱1,800.", "rows": 3, "solution": [ { "account": "Accounts Receivable", "debit": 1800 }, { "account": "Sales", "credit": 1800 }, { "account": "Sale.", "isExplanation": true } ] },
        { "date": "Feb 28", "description": "Shrinkage adjustment (Periodic - No Entry).", "rows": 0, "solution": [ { "account": "No Entry", "debit": "" }, { "account": "No entry.", "isExplanation": true } ] }
      ],
      "type": "Journalizing"
    }
  },
  {
    "FABM1-Merch-Period-FIFO-015": {
      "id": "set15_periodic_fifo",
      "instructions": "Journalize the transactions using Periodic Inventory System and FIFO Costing. Use the following accounts: Cash, Accounts Receivable, Purchases, Purchase Returns and Allowances, Purchase Discounts, Freight In, Freight Out, Sales, Sales Returns and Allowances, Sales Discounts, Accounts Payable, Owner's Capital, Owner's Drawings, Salaries Expense, Utilities Expense.",
      "subject": "FABM1",
      "title": "Set 15: Periodic Inventory (FIFO)",
      "topic": "Journalizing - Merchandising Business Transactions",
      "transactions": [
        { "date": "Mar 1", "description": "Owner invested ₱28,000 cash.", "rows": 3, "solution": [ { "account": "Cash", "debit": 28000 }, { "account": "Owner's Capital", "credit": 28000 }, { "account": "Investment.", "isExplanation": true } ] },
        { "date": "Mar 2", "description": "Purchased goods ₱6,500 on account, 1/10, n/30.", "rows": 3, "solution": [ { "account": "Purchases", "debit": 6500 }, { "account": "Accounts Payable", "credit": 6500 }, { "account": "Purchase.", "isExplanation": true } ] },
        { "date": "Mar 3", "description": "Paid freight in ₱130.", "rows": 3, "solution": [ { "account": "Freight In", "debit": 130 }, { "account": "Cash", "credit": 130 }, { "account": "Freight.", "isExplanation": true } ] },
        { "date": "Mar 5", "description": "Returned goods ₱350.", "rows": 3, "solution": [ { "account": "Accounts Payable", "debit": 350 }, { "account": "Purchase Returns and Allowances", "credit": 350 }, { "account": "Return.", "isExplanation": true } ] },
        { "date": "Mar 8", "description": "Sold goods ₱4,200 on account.", "rows": 3, "solution": [ { "account": "Accounts Receivable", "debit": 4200 }, { "account": "Sales", "credit": 4200 }, { "account": "Sale.", "isExplanation": true } ] },
        { "date": "Mar 9", "description": "Paid freight out ₱80.", "rows": 3, "solution": [ { "account": "Freight Out", "debit": 80 }, { "account": "Cash", "credit": 80 }, { "account": "Delivery.", "isExplanation": true } ] },
        { "date": "Mar 11", "description": "Paid supplier in full (with discount).", "rows": 4, "solution": [ { "account": "Accounts Payable", "debit": 6150 }, { "account": "Purchase Discounts", "credit": 61.5 }, { "account": "Cash", "credit": 6088.5 }, { "account": "Payment.", "isExplanation": true } ] },
        { "date": "Mar 14", "description": "Customer returned goods ₱150.", "rows": 3, "solution": [ { "account": "Sales Returns and Allowances", "debit": 150 }, { "account": "Accounts Receivable", "credit": 150 }, { "account": "Return.", "isExplanation": true } ] },
        { "date": "Mar 16", "description": "Collected from customer in full.", "rows": 3, "solution": [ { "account": "Cash", "debit": 4050 }, { "account": "Accounts Receivable", "credit": 4050 }, { "account": "Collection.", "isExplanation": true } ] },
        { "date": "Mar 18", "description": "Purchased goods cash ₱1,800.", "rows": 3, "solution": [ { "account": "Purchases", "debit": 1800 }, { "account": "Cash", "credit": 1800 }, { "account": "Purchase.", "isExplanation": true } ] },
        { "date": "Mar 20", "description": "Sold goods cash ₱2,200.", "rows": 3, "solution": [ { "account": "Cash", "debit": 2200 }, { "account": "Sales", "credit": 2200 }, { "account": "Sale.", "isExplanation": true } ] },
        { "date": "Mar 22", "description": "Owner withdrew ₱700.", "rows": 3, "solution": [ { "account": "Owner's Drawings", "debit": 700 }, { "account": "Cash", "credit": 700 }, { "account": "Withdrawal.", "isExplanation": true } ] },
        { "date": "Mar 25", "description": "Paid Salaries ₱1,300.", "rows": 3, "solution": [ { "account": "Salaries Expense", "debit": 1300 }, { "account": "Cash", "credit": 1300 }, { "account": "Salaries.", "isExplanation": true } ] },
        { "date": "Mar 28", "description": "Paid Utilities ₱400.", "rows": 3, "solution": [ { "account": "Utilities Expense", "debit": 400 }, { "account": "Cash", "credit": 400 }, { "account": "Utilities.", "isExplanation": true } ] },
        { "date": "Mar 30", "description": "Purchased goods on account ₱2,500.", "rows": 3, "solution": [ { "account": "Purchases", "debit": 2500 }, { "account": "Accounts Payable", "credit": 2500 }, { "account": "Purchase.", "isExplanation": true } ] }
      ],
      "type": "Journalizing"
    }
  },
  {
    "FABM1-Merch-Period-WeightedAvg-001": {
      "id": "set1_periodic_weighted_avg_comprehensive",
      "instructions": "Journalize the transactions using Periodic Inventory System and Weighted Average Costing. Use the following accounts: Accounts Payable, Accounts Receivable, Cash, Purchases, Purchase Returns and Allowances, Purchase Discounts, Freight In, Freight Out, Sales, Sales Returns and Allowances, Sales Discounts, Utilities Expense, Owner's Capital, Owner's Drawings, Rent Expense, Salaries Expense.",
      "subject": "FABM1",
      "title": "Set 1: Weighted Average Costing (Periodic)",
      "topic": "Journalizing - Merchandising Business Transactions",
      "transactions": [
        { "date": "Dec 1", "description": "Owner invested ₱100,000 cash.", "rows": 3, "solution": [ { "account": "Cash", "debit": 100000 }, { "account": "Owner's Capital", "credit": 100000 }, { "account": "Initial investment.", "isExplanation": true } ] },
        { "date": "Dec 2", "description": "Purchased 2,000 units at ₱20 each on account, terms 2/10, n/30.", "rows": 3, "solution": [ { "account": "Purchases", "debit": 40000 }, { "account": "Accounts Payable", "credit": 40000 }, { "account": "Purchased 2000 units.", "isExplanation": true } ] },
        { "date": "Dec 3", "description": "Paid freight in ₱1,000 cash.", "rows": 3, "solution": [ { "account": "Freight In", "debit": 1000 }, { "account": "Cash", "credit": 1000 }, { "account": "Paid freight.", "isExplanation": true } ] },
        { "date": "Dec 5", "description": "Returned 200 defective units to supplier.", "rows": 3, "solution": [ { "account": "Accounts Payable", "debit": 4000 }, { "account": "Purchase Returns and Allowances", "credit": 4000 }, { "account": "Returned 200 units.", "isExplanation": true } ] },
        { "date": "Dec 7", "description": "Purchased 1,000 units at ₱25 each on account.", "rows": 3, "solution": [ { "account": "Purchases", "debit": 25000 }, { "account": "Accounts Payable", "credit": 25000 }, { "account": "Purchased 1000 units.", "isExplanation": true } ] },
        { "date": "Dec 10", "description": "Sold 1,500 units on account @ ₱50 each, terms 1/10, n/30.", "rows": 3, "solution": [ { "account": "Accounts Receivable", "debit": 75000 }, { "account": "Sales", "credit": 75000 }, { "account": "Sold 1500 units.", "isExplanation": true } ] },
        { "date": "Dec 11", "description": "Paid balance for Dec 2 purchase within discount period. (40000 - 4000 return = 36000 bal. 2% disc).", "rows": 4, "solution": [ { "account": "Accounts Payable", "debit": 36000 }, { "account": "Purchase Discounts", "credit": 720 }, { "account": "Cash", "credit": 35280 }, { "account": "Paid account.", "isExplanation": true } ] },
        { "date": "Dec 12", "description": "Customer returned 100 units from Dec 10 sale.", "rows": 3, "solution": [ { "account": "Sales Returns and Allowances", "debit": 5000 }, { "account": "Accounts Receivable", "credit": 5000 }, { "account": "Sales return.", "isExplanation": true } ] },
        { "date": "Dec 14", "description": "Paid freight out ₱500 cash.", "rows": 3, "solution": [ { "account": "Freight Out", "debit": 500 }, { "account": "Cash", "credit": 500 }, { "account": "Delivery expense.", "isExplanation": true } ] },
        { "date": "Dec 19", "description": "Received payment from Dec 10 customer within discount. (75000 - 5000 return = 70000 bal. 1% disc).", "rows": 4, "solution": [ { "account": "Cash", "debit": 69300 }, { "account": "Sales Discounts", "debit": 700 }, { "account": "Accounts Receivable", "credit": 70000 }, { "account": "Collection.", "isExplanation": true } ] },
        { "date": "Dec 20", "description": "Purchased supplies ₱500 cash.", "rows": 3, "solution": [ { "account": "Supplies", "debit": 500 }, { "account": "Cash", "credit": 500 }, { "account": "Supplies.", "isExplanation": true } ] },
        { "date": "Dec 25", "description": "Owner withdrew ₱2,000 cash.", "rows": 3, "solution": [ { "account": "Owner's Drawings", "debit": 2000 }, { "account": "Cash", "credit": 2000 }, { "account": "Withdrawal.", "isExplanation": true } ] },
        { "date": "Dec 28", "description": "Paid rent ₱1,500.", "rows": 3, "solution": [ { "account": "Rent Expense", "debit": 1500 }, { "account": "Cash", "credit": 1500 }, { "account": "Rent.", "isExplanation": true } ] },
        { "date": "Dec 30", "description": "Paid salaries ₱2,000.", "rows": 3, "solution": [ { "account": "Salaries Expense", "debit": 2000 }, { "account": "Cash", "credit": 2000 }, { "account": "Salaries.", "isExplanation": true } ] },
        { "date": "Dec 31", "description": "Accrued utilities ₱300.", "rows": 3, "solution": [ { "account": "Utilities Expense", "debit": 300 }, { "account": "Accounts Payable", "credit": 300 }, { "account": "Accrual.", "isExplanation": true } ] }
      ],
      "type": "Journalizing"
    }
  },
  {
    "FABM1-Merch-Period-WeightedAvg-002": {
      "id": "set2_periodic_weighted_avg",
      "instructions": "Journalize the transactions using Periodic Inventory System and Weighted Average Costing. Use the following accounts: Accounts Payable, Accounts Receivable, Cash, Purchases, Purchase Returns and Allowances, Purchase Discounts, Freight In, Freight Out, Sales, Sales Returns and Allowances, Sales Discounts, Utilities Expense, Owner's Capital, Owner's Drawings, No Entry.",
      "subject": "FABM1",
      "title": "Set 2: Weighted Average Costing (Periodic)",
      "topic": "Journalizing - Merchandising Business Transactions",
      "transactions": [
        { "date": "Feb 1", "description": "Owner invested ₱20,000 cash.", "rows": 3, "solution": [ { "account": "Cash", "debit": 20000 }, { "account": "Owner's Capital", "credit": 20000 }, { "account": "Investment.", "isExplanation": true } ] },
        { "date": "Feb 2", "description": "Purchased 200 units @ ₱50 each, terms 2/10, n/30.", "rows": 3, "solution": [ { "account": "Purchases", "debit": 10000 }, { "account": "Accounts Payable", "credit": 10000 }, { "account": "Purchased 200 units @ ₱50.", "isExplanation": true } ] },
        { "date": "Feb 3", "description": "Paid freight in ₱200 cash.", "rows": 3, "solution": [ { "account": "Freight In", "debit": 200 }, { "account": "Cash", "credit": 200 }, { "account": "Paid freight on purchase.", "isExplanation": true } ] },
        { "date": "Feb 5", "description": "Sold 100 units @ ₱80 on account, terms 1/10, n/30.", "rows": 3, "solution": [ { "account": "Accounts Receivable", "debit": 8000 }, { "account": "Sales", "credit": 8000 }, { "account": "Sold 100 units on account.", "isExplanation": true } ] },
        { "date": "Feb 7", "description": "Returned 10 defective units to supplier from Feb 2 purchase.", "rows": 3, "solution": [ { "account": "Accounts Payable", "debit": 500 }, { "account": "Purchase Returns and Allowances", "credit": 500 }, { "account": "Returned goods to supplier.", "isExplanation": true } ] },
        { "date": "Feb 9", "description": "Purchased 100 units @ ₱54 each.", "rows": 3, "solution": [ { "account": "Purchases", "debit": 5400 }, { "account": "Accounts Payable", "credit": 5400 }, { "account": "Purchased 100 units.", "isExplanation": true } ] },
        { "date": "Feb 11", "description": "Paid supplier for Feb 2 purchase balance, within discount period.", "rows": 4, "solution": [ { "account": "Accounts Payable", "debit": 9500 }, { "account": "Purchase Discounts", "credit": 190 }, { "account": "Cash", "credit": 9310 }, { "account": "Paid account with discount.", "isExplanation": true } ] },
        { "date": "Feb 14", "description": "Customer from Feb 5 returned 10 units.", "rows": 3, "solution": [ { "account": "Sales Returns and Allowances", "debit": 800 }, { "account": "Accounts Receivable", "credit": 800 }, { "account": "Customer return.", "isExplanation": true } ] },
        { "date": "Feb 15", "description": "Collected from Feb 5 customer within discount period.", "rows": 4, "solution": [ { "account": "Cash", "debit": 7128 }, { "account": "Sales Discounts", "debit": 72 }, { "account": "Accounts Receivable", "credit": 7200 }, { "account": "Collection with discount.", "isExplanation": true } ] },
        { "date": "Feb 18", "description": "Sold 50 units for cash ₱85 each.", "rows": 3, "solution": [ { "account": "Cash", "debit": 4250 }, { "account": "Sales", "credit": 4250 }, { "account": "Cash sale.", "isExplanation": true } ] },
        { "date": "Feb 20", "description": "Paid freight out ₱100.", "rows": 3, "solution": [ { "account": "Freight Out", "debit": 100 }, { "account": "Cash", "credit": 100 }, { "account": "Paid delivery expense.", "isExplanation": true } ] },
        { "date": "Feb 22", "description": "Purchased 50 units @ ₱56.", "rows": 3, "solution": [ { "account": "Purchases", "debit": 2800 }, { "account": "Accounts Payable", "credit": 2800 }, { "account": "Purchased 50 units.", "isExplanation": true } ] },
        { "date": "Feb 25", "description": "Owner withdrew ₱1,000 cash.", "rows": 3, "solution": [ { "account": "Owner's Drawings", "debit": 1000 }, { "account": "Cash", "credit": 1000 }, { "account": "Withdrawal.", "isExplanation": true } ] },
        { "date": "Feb 27", "description": "Paid utilities ₱400.", "rows": 3, "solution": [ { "account": "Utilities Expense", "debit": 400 }, { "account": "Cash", "credit": 400 }, { "account": "Paid utilities.", "isExplanation": true } ] },
        { "date": "Feb 28", "description": "Inventory shrinkage adjustment ₱50.", "rows": 0, "solution": [ { "account": "No Entry", "debit": "" }, { "account": "No Entry in Periodic.", "isExplanation": true } ] }
      ],
      "type": "Journalizing"
    }
  },
  {
    "FABM1-Merch-Period-WeightedAvg-003": {
      "id": "set3_periodic_weighted_avg",
      "instructions": "Journalize the transactions using Periodic Inventory System and Weighted Average Costing. Use the following accounts: Accounts Payable, Accounts Receivable, Cash, Purchases, Purchase Returns and Allowances, Purchase Discounts, Freight In, Sales, Sales Returns and Allowances, Sales Discounts, Freight Out, Rent Expense, Owner's Capital, Owner's Drawings.",
      "subject": "FABM1",
      "title": "Set 3: Weighted Average Costing (Periodic)",
      "topic": "Journalizing - Merchandising Business Transactions",
      "transactions": [
        { "date": "Mar 1", "description": "Owner invested ₱30,000 cash.", "rows": 3, "solution": [ { "account": "Cash", "debit": 30000 }, { "account": "Owner's Capital", "credit": 30000 }, { "account": "Investment.", "isExplanation": true } ] },
        { "date": "Mar 2", "description": "Purchased 500 units @ ₱20 each, trade discount 5%, terms n/30.", "rows": 3, "solution": [ { "account": "Purchases", "debit": 9500 }, { "account": "Accounts Payable", "credit": 9500 }, { "account": "Recorded at net of trade discount.", "isExplanation": true } ] },
        { "date": "Mar 3", "description": "Paid freight in ₱500.", "rows": 3, "solution": [ { "account": "Freight In", "debit": 500 }, { "account": "Cash", "credit": 500 }, { "account": "Paid freight in.", "isExplanation": true } ] },
        { "date": "Mar 5", "description": "Sold 300 units @ ₱40.", "rows": 3, "solution": [ { "account": "Accounts Receivable", "debit": 12000 }, { "account": "Sales", "credit": 12000 }, { "account": "Sold goods on account.", "isExplanation": true } ] },
        { "date": "Mar 7", "description": "Purchased 200 units @ ₱25.", "rows": 3, "solution": [ { "account": "Purchases", "debit": 5000 }, { "account": "Accounts Payable", "credit": 5000 }, { "account": "Purchased 200 units.", "isExplanation": true } ] },
        { "date": "Mar 10", "description": "Returned 20 units to supplier from Mar 7 purchase.", "rows": 3, "solution": [ { "account": "Accounts Payable", "debit": 500 }, { "account": "Purchase Returns and Allowances", "credit": 500 }, { "account": "Returned goods.", "isExplanation": true } ] },
        { "date": "Mar 12", "description": "Sold 150 units @ ₱45, terms 2/10, n/30.", "rows": 3, "solution": [ { "account": "Accounts Receivable", "debit": 6750 }, { "account": "Sales", "credit": 6750 }, { "account": "Sold 150 units on account.", "isExplanation": true } ] },
        { "date": "Mar 14", "description": "Paid freight out ₱150.", "rows": 3, "solution": [ { "account": "Freight Out", "debit": 150 }, { "account": "Cash", "credit": 150 }, { "account": "Paid freight out.", "isExplanation": true } ] },
        { "date": "Mar 16", "description": "Customer returned 5 units from Mar 12 sale.", "rows": 3, "solution": [ { "account": "Sales Returns and Allowances", "debit": 225 }, { "account": "Accounts Receivable", "credit": 225 }, { "account": "Customer return.", "isExplanation": true } ] },
        { "date": "Mar 20", "description": "Received payment from Mar 12 customer within discount.", "rows": 4, "solution": [ { "account": "Cash", "debit": 6394.5 }, { "account": "Sales Discounts", "debit": 130.5 }, { "account": "Accounts Receivable", "credit": 6525 }, { "account": "Collection with discount.", "isExplanation": true } ] },
        { "date": "Mar 22", "description": "Paid supplier for Mar 2 purchase.", "rows": 3, "solution": [ { "account": "Accounts Payable", "debit": 9500 }, { "account": "Cash", "credit": 9500 }, { "account": "Paid account in full.", "isExplanation": true } ] },
        { "date": "Mar 25", "description": "Purchased 100 units @ ₱30 cash.", "rows": 3, "solution": [ { "account": "Purchases", "debit": 3000 }, { "account": "Cash", "credit": 3000 }, { "account": "Cash purchase.", "isExplanation": true } ] },
        { "date": "Mar 28", "description": "Paid rent ₱1,200.", "rows": 3, "solution": [ { "account": "Rent Expense", "debit": 1200 }, { "account": "Cash", "credit": 1200 }, { "account": "Paid rent.", "isExplanation": true } ] },
        { "date": "Mar 30", "description": "Sold 50 units for cash ₱60.", "rows": 3, "solution": [ { "account": "Cash", "debit": 3000 }, { "account": "Sales", "credit": 3000 }, { "account": "Cash sale.", "isExplanation": true } ] },
        { "date": "Mar 31", "description": "Owner withdrew ₱500.", "rows": 3, "solution": [ { "account": "Owner's Drawings", "debit": 500 }, { "account": "Cash", "credit": 500 }, { "account": "Withdrawal.", "isExplanation": true } ] }
      ],
      "type": "Journalizing"
    }
  },
  {
    "FABM1-Merch-Period-WeightedAvg-004": {
      "id": "set4_periodic_weighted_avg",
      "instructions": "Journalize the transactions using Periodic Inventory System and Weighted Average Costing. Use the following accounts: Accounts Payable, Accounts Receivable, Cash, Purchases, Purchase Returns and Allowances, Purchase Discounts, Freight In, Freight Out, Sales, Sales Returns and Allowances, Sales Discounts, Advertising Expense, Owner's Capital, Owner's Drawings.",
      "subject": "FABM1",
      "title": "Set 4: Weighted Average Costing (Periodic)",
      "topic": "Journalizing - Merchandising Business Transactions",
      "transactions": [
        { "date": "Apr 1", "description": "Owner invested ₱60,000 cash.", "rows": 3, "solution": [ { "account": "Cash", "debit": 60000 }, { "account": "Owner's Capital", "credit": 60000 }, { "account": "Initial investment.", "isExplanation": true } ] },
        { "date": "Apr 2", "description": "Purchased 400 units @ ₱10, terms 2/10, n/30.", "rows": 3, "solution": [ { "account": "Purchases", "debit": 4000 }, { "account": "Accounts Payable", "credit": 4000 }, { "account": "Purchased 400 units.", "isExplanation": true } ] },
        { "date": "Apr 3", "description": "Paid freight in ₱100.", "rows": 3, "solution": [ { "account": "Freight In", "debit": 100 }, { "account": "Cash", "credit": 100 }, { "account": "Paid freight in.", "isExplanation": true } ] },
        { "date": "Apr 5", "description": "Returned 20 units to supplier (₱10 credit).", "rows": 3, "solution": [ { "account": "Accounts Payable", "debit": 200 }, { "account": "Purchase Returns and Allowances", "credit": 200 }, { "account": "Returned goods.", "isExplanation": true } ] },
        { "date": "Apr 8", "description": "Sold 200 units @ ₱25.", "rows": 3, "solution": [ { "account": "Accounts Receivable", "debit": 5000 }, { "account": "Sales", "credit": 5000 }, { "account": "Sold 200 units.", "isExplanation": true } ] },
        { "date": "Apr 10", "description": "Paid freight out ₱50.", "rows": 3, "solution": [ { "account": "Freight Out", "debit": 50 }, { "account": "Cash", "credit": 50 }, { "account": "Paid freight out.", "isExplanation": true } ] },
        { "date": "Apr 12", "description": "Paid supplier balance within discount period. (Bal 3800 * .98).", "rows": 4, "solution": [ { "account": "Accounts Payable", "debit": 3800 }, { "account": "Purchase Discounts", "credit": 76 }, { "account": "Cash", "credit": 3724 }, { "account": "Paid with discount.", "isExplanation": true } ] },
        { "date": "Apr 15", "description": "Purchased 300 units @ ₱12.", "rows": 3, "solution": [ { "account": "Purchases", "debit": 3600 }, { "account": "Accounts Payable", "credit": 3600 }, { "account": "Purchased 300 units.", "isExplanation": true } ] },
        { "date": "Apr 17", "description": "Sold 300 units @ ₱28.", "rows": 3, "solution": [ { "account": "Accounts Receivable", "debit": 8400 }, { "account": "Sales", "credit": 8400 }, { "account": "Sold 300 units.", "isExplanation": true } ] },
        { "date": "Apr 19", "description": "Customer returned 10 units from Apr 17 sale.", "rows": 3, "solution": [ { "account": "Sales Returns and Allowances", "debit": 280 }, { "account": "Accounts Receivable", "credit": 280 }, { "account": "Customer return.", "isExplanation": true } ] },
        { "date": "Apr 21", "description": "Paid Advertising ₱200.", "rows": 3, "solution": [ { "account": "Advertising Expense", "debit": 200 }, { "account": "Cash", "credit": 200 }, { "account": "Paid advertising.", "isExplanation": true } ] },
        { "date": "Apr 23", "description": "Collected from Apr 8 customer.", "rows": 3, "solution": [ { "account": "Cash", "debit": 5000 }, { "account": "Accounts Receivable", "credit": 5000 }, { "account": "Collection.", "isExplanation": true } ] },
        { "date": "Apr 26", "description": "Purchased 100 units @ ₱15.", "rows": 3, "solution": [ { "account": "Purchases", "debit": 1500 }, { "account": "Accounts Payable", "credit": 1500 }, { "account": "Purchased 100 units.", "isExplanation": true } ] },
        { "date": "Apr 28", "description": "Paid supplier for Apr 15 purchase.", "rows": 3, "solution": [ { "account": "Accounts Payable", "debit": 3600 }, { "account": "Cash", "credit": 3600 }, { "account": "Paid account.", "isExplanation": true } ] },
        { "date": "Apr 30", "description": "Owner withdrew ₱1,500.", "rows": 3, "solution": [ { "account": "Owner's Drawings", "debit": 1500 }, { "account": "Cash", "credit": 1500 }, { "account": "Withdrawal.", "isExplanation": true } ] }
      ],
      "type": "Journalizing"
    }
  },
  {
    "FABM1-Merch-Period-WeightedAvg-005": {
      "id": "set5_periodic_weighted_avg",
      "instructions": "Journalize the transactions using Periodic Inventory System and Weighted Average Costing. Use the following accounts: Accounts Payable, Accounts Receivable, Cash, Purchases, Purchase Returns and Allowances, Purchase Discounts, Freight In, Freight Out, Sales, Sales Returns and Allowances, Sales Discounts, Supplies, Owner's Capital, Owner's Drawings, Salaries Expense, Utilities Expense.",
      "subject": "FABM1",
      "title": "Set 5: Weighted Average Costing (Periodic)",
      "topic": "Journalizing - Merchandising Business Transactions",
      "transactions": [
        { "date": "May 1", "description": "Purchased 100 units at ₱10 each.", "rows": 3, "solution": [ { "account": "Purchases", "debit": 1000 }, { "account": "Accounts Payable", "credit": 1000 }, { "account": "Purchased 100 units.", "isExplanation": true } ] },
        { "date": "May 3", "description": "Purchased 100 units at ₱12 each.", "rows": 3, "solution": [ { "account": "Purchases", "debit": 1200 }, { "account": "Accounts Payable", "credit": 1200 }, { "account": "Purchased 100 units.", "isExplanation": true } ] },
        { "date": "May 5", "description": "Sold 150 units for ₱20 each.", "rows": 3, "solution": [ { "account": "Accounts Receivable", "debit": 3000 }, { "account": "Sales", "credit": 3000 }, { "account": "Sold 150 units.", "isExplanation": true } ] },
        { "date": "May 8", "description": "Returned 10 defective units from May 3 purchase (Supplier grants ₱12 credit).", "rows": 3, "solution": [ { "account": "Accounts Payable", "debit": 120 }, { "account": "Purchase Returns and Allowances", "credit": 120 }, { "account": "Returned goods.", "isExplanation": true } ] },
        { "date": "May 10", "description": "Purchased 60 units at ₱13.25 each.", "rows": 3, "solution": [ { "account": "Purchases", "debit": 795 }, { "account": "Accounts Payable", "credit": 795 }, { "account": "Purchased 60 units.", "isExplanation": true } ] },
        { "date": "May 12", "description": "Paid freight ₱25 on May 10 purchase.", "rows": 3, "solution": [ { "account": "Freight In", "debit": 25 }, { "account": "Cash", "credit": 25 }, { "account": "Paid freight.", "isExplanation": true } ] },
        { "date": "May 15", "description": "Sold 80 units for ₱25 each.", "rows": 3, "solution": [ { "account": "Accounts Receivable", "debit": 2000 }, { "account": "Sales", "credit": 2000 }, { "account": "Sold 80 units.", "isExplanation": true } ] },
        { "date": "May 20", "description": "Customer returned 10 units from May 15 sale.", "rows": 3, "solution": [ { "account": "Sales Returns and Allowances", "debit": 250 }, { "account": "Accounts Receivable", "credit": 250 }, { "account": "Customer return.", "isExplanation": true } ] },
        { "date": "May 22", "description": "Paid supplier for May 1 purchase in full.", "rows": 3, "solution": [ { "account": "Accounts Payable", "debit": 1000 }, { "account": "Cash", "credit": 1000 }, { "account": "Payment.", "isExplanation": true } ] },
        { "date": "May 24", "description": "Paid freight out ₱50 on May 15 sale.", "rows": 3, "solution": [ { "account": "Freight Out", "debit": 50 }, { "account": "Cash", "credit": 50 }, { "account": "Delivery expense.", "isExplanation": true } ] },
        { "date": "May 25", "description": "Purchased Supplies ₱100 cash (Not merchandise).", "rows": 3, "solution": [ { "account": "Supplies", "debit": 100 }, { "account": "Cash", "credit": 100 }, { "account": "Supplies purchase.", "isExplanation": true } ] },
        { "date": "May 28", "description": "Owner withdrew ₱500.", "rows": 3, "solution": [ { "account": "Owner's Drawings", "debit": 500 }, { "account": "Cash", "credit": 500 }, { "account": "Withdrawal.", "isExplanation": true } ] },
        { "date": "May 29", "description": "Received payment from May 15 customer within discount (Terms 2/10).", "rows": 4, "solution": [ { "account": "Cash", "debit": 1715 }, { "account": "Sales Discounts", "debit": 35 }, { "account": "Accounts Receivable", "credit": 1750 }, { "account": "Collection.", "isExplanation": true } ] },
        { "date": "May 30", "description": "Paid salaries ₱500.", "rows": 3, "solution": [ { "account": "Salaries Expense", "debit": 500 }, { "account": "Cash", "credit": 500 }, { "account": "Expense.", "isExplanation": true } ] },
        { "date": "May 31", "description": "Sold remaining 30 units for cash ₱30 each.", "rows": 3, "solution": [ { "account": "Cash", "debit": 900 }, { "account": "Sales", "credit": 900 }, { "account": "Cash sale.", "isExplanation": true } ] }
      ],
      "type": "Journalizing"
    }
  },
  {
    "FABM1-Merch-Period-WeightedAvg-006": {
      "id": "set6_periodic_weighted_avg",
      "instructions": "Journalize the transactions using Periodic Inventory System and Weighted Average Costing. Use the following accounts: Cash, Accounts Receivable, Purchases, Purchase Returns and Allowances, Purchase Discounts, Freight In, Freight Out, Sales, Sales Returns and Allowances, Sales Discounts, Accounts Payable, Owner's Capital, Owner's Drawings, Rent Expense, Salaries Expense.",
      "subject": "FABM1",
      "title": "Set 6: Periodic Inventory (Weighted Avg)",
      "topic": "Journalizing - Merchandising Business Transactions",
      "transactions": [
        { "date": "Jun 1", "description": "Owner invested ₱100,000 cash.", "rows": 3, "solution": [ { "account": "Cash", "debit": 100000 }, { "account": "Owner's Capital", "credit": 100000 }, { "account": "Investment.", "isExplanation": true } ] },
        { "date": "Jun 2", "description": "Purchased goods on account ₱10,000, terms 2/10, n/30.", "rows": 3, "solution": [ { "account": "Purchases", "debit": 10000 }, { "account": "Accounts Payable", "credit": 10000 }, { "account": "Purchase.", "isExplanation": true } ] },
        { "date": "Jun 3", "description": "Paid freight in ₱200.", "rows": 3, "solution": [ { "account": "Freight In", "debit": 200 }, { "account": "Cash", "credit": 200 }, { "account": "Freight.", "isExplanation": true } ] },
        { "date": "Jun 5", "description": "Returned ₱500 of goods to supplier.", "rows": 3, "solution": [ { "account": "Accounts Payable", "debit": 500 }, { "account": "Purchase Returns and Allowances", "credit": 500 }, { "account": "Return.", "isExplanation": true } ] },
        { "date": "Jun 8", "description": "Sold goods on account ₱5,000.", "rows": 3, "solution": [ { "account": "Accounts Receivable", "debit": 5000 }, { "account": "Sales", "credit": 5000 }, { "account": "Sale.", "isExplanation": true } ] },
        { "date": "Jun 10", "description": "Paid freight out ₱100.", "rows": 3, "solution": [ { "account": "Freight Out", "debit": 100 }, { "account": "Cash", "credit": 100 }, { "account": "Delivery.", "isExplanation": true } ] },
        { "date": "Jun 12", "description": "Paid supplier in full (with discount).", "rows": 4, "solution": [ { "account": "Accounts Payable", "debit": 9500 }, { "account": "Purchase Discounts", "credit": 190 }, { "account": "Cash", "credit": 9310 }, { "account": "Payment.", "isExplanation": true } ] },
        { "date": "Jun 15", "description": "Customer returned ₱200 of goods.", "rows": 3, "solution": [ { "account": "Sales Returns and Allowances", "debit": 200 }, { "account": "Accounts Receivable", "credit": 200 }, { "account": "Return.", "isExplanation": true } ] },
        { "date": "Jun 18", "description": "Collected from customer (no discount).", "rows": 3, "solution": [ { "account": "Cash", "debit": 4800 }, { "account": "Accounts Receivable", "credit": 4800 }, { "account": "Collection.", "isExplanation": true } ] },
        { "date": "Jun 20", "description": "Purchased goods cash ₱2,000.", "rows": 3, "solution": [ { "account": "Purchases", "debit": 2000 }, { "account": "Cash", "credit": 2000 }, { "account": "Cash purchase.", "isExplanation": true } ] },
        { "date": "Jun 25", "description": "Sold goods cash ₱3,000.", "rows": 3, "solution": [ { "account": "Cash", "debit": 3000 }, { "account": "Sales", "credit": 3000 }, { "account": "Cash sale.", "isExplanation": true } ] },
        { "date": "Jun 28", "description": "Paid Rent ₱1,500.", "rows": 3, "solution": [ { "account": "Rent Expense", "debit": 1500 }, { "account": "Cash", "credit": 1500 }, { "account": "Rent.", "isExplanation": true } ] },
        { "date": "Jun 29", "description": "Paid Salaries ₱2,000.", "rows": 3, "solution": [ { "account": "Salaries Expense", "debit": 2000 }, { "account": "Cash", "credit": 2000 }, { "account": "Salaries.", "isExplanation": true } ] },
        { "date": "Jun 30", "description": "Owner withdrew ₱1,000.", "rows": 3, "solution": [ { "account": "Owner's Drawings", "debit": 1000 }, { "account": "Cash", "credit": 1000 }, { "account": "Withdrawal.", "isExplanation": true } ] },
        { "date": "Jun 30", "description": "Purchased goods on account ₱5,000.", "rows": 3, "solution": [ { "account": "Purchases", "debit": 5000 }, { "account": "Accounts Payable", "credit": 5000 }, { "account": "Purchase.", "isExplanation": true } ] }
      ],
      "type": "Journalizing"
    }
  },
  {
    "FABM1-Merch-Period-WeightedAvg-007": {
      "id": "set7_periodic_weighted_avg",
      "instructions": "Journalize the transactions using Periodic Inventory System and Weighted Average Costing. Use the following accounts: Cash, Accounts Receivable, Purchases, Purchase Returns and Allowances, Purchase Discounts, Freight In, Freight Out, Sales, Sales Returns and Allowances, Sales Discounts, Accounts Payable, Owner's Capital, Advertising Expense, Utilities Expense.",
      "subject": "FABM1",
      "title": "Set 7: Periodic Inventory (Weighted Avg)",
      "topic": "Journalizing - Merchandising Business Transactions",
      "transactions": [
        { "date": "Jul 1", "description": "Owner invested ₱60,000 cash.", "rows": 3, "solution": [ { "account": "Cash", "debit": 60000 }, { "account": "Owner's Capital", "credit": 60000 }, { "account": "Investment.", "isExplanation": true } ] },
        { "date": "Jul 2", "description": "Purchased merchandise ₱8,000, terms 2/10, n/30.", "rows": 3, "solution": [ { "account": "Purchases", "debit": 8000 }, { "account": "Accounts Payable", "credit": 8000 }, { "account": "Purchase.", "isExplanation": true } ] },
        { "date": "Jul 3", "description": "Paid freight in ₱150.", "rows": 3, "solution": [ { "account": "Freight In", "debit": 150 }, { "account": "Cash", "credit": 150 }, { "account": "Freight.", "isExplanation": true } ] },
        { "date": "Jul 5", "description": "Returned goods ₱400.", "rows": 3, "solution": [ { "account": "Accounts Payable", "debit": 400 }, { "account": "Purchase Returns and Allowances", "credit": 400 }, { "account": "Return.", "isExplanation": true } ] },
        { "date": "Jul 7", "description": "Sold merchandise ₱4,000, terms 1/10, n/30.", "rows": 3, "solution": [ { "account": "Accounts Receivable", "debit": 4000 }, { "account": "Sales", "credit": 4000 }, { "account": "Sale.", "isExplanation": true } ] },
        { "date": "Jul 8", "description": "Paid freight out ₱100.", "rows": 3, "solution": [ { "account": "Freight Out", "debit": 100 }, { "account": "Cash", "credit": 100 }, { "account": "Delivery.", "isExplanation": true } ] },
        { "date": "Jul 12", "description": "Paid supplier in full (with discount).", "rows": 4, "solution": [ { "account": "Accounts Payable", "debit": 7600 }, { "account": "Purchase Discounts", "credit": 152 }, { "account": "Cash", "credit": 7448 }, { "account": "Payment.", "isExplanation": true } ] },
        { "date": "Jul 15", "description": "Received return from customer ₱300.", "rows": 3, "solution": [ { "account": "Sales Returns and Allowances", "debit": 300 }, { "account": "Accounts Receivable", "credit": 300 }, { "account": "Return.", "isExplanation": true } ] },
        { "date": "Jul 17", "description": "Collected from customer (with discount).", "rows": 4, "solution": [ { "account": "Cash", "debit": 3663 }, { "account": "Sales Discounts", "debit": 37 }, { "account": "Accounts Receivable", "credit": 3700 }, { "account": "Collection.", "isExplanation": true } ] },
        { "date": "Jul 20", "description": "Purchased goods cash ₱1,500.", "rows": 3, "solution": [ { "account": "Purchases", "debit": 1500 }, { "account": "Cash", "credit": 1500 }, { "account": "Cash purchase.", "isExplanation": true } ] },
        { "date": "Jul 22", "description": "Sold goods cash ₱2,000.", "rows": 3, "solution": [ { "account": "Cash", "debit": 2000 }, { "account": "Sales", "credit": 2000 }, { "account": "Cash sale.", "isExplanation": true } ] },
        { "date": "Jul 25", "description": "Paid advertising ₱500.", "rows": 3, "solution": [ { "account": "Advertising Expense", "debit": 500 }, { "account": "Cash", "credit": 500 }, { "account": "Advertising.", "isExplanation": true } ] },
        { "date": "Jul 28", "description": "Paid utilities ₱600.", "rows": 3, "solution": [ { "account": "Utilities Expense", "debit": 600 }, { "account": "Cash", "credit": 600 }, { "account": "Utilities.", "isExplanation": true } ] },
        { "date": "Jul 30", "description": "Purchased goods ₱3,000 on account.", "rows": 3, "solution": [ { "account": "Purchases", "debit": 3000 }, { "account": "Accounts Payable", "credit": 3000 }, { "account": "Purchase.", "isExplanation": true } ] },
        { "date": "Jul 31", "description": "Returned ₱100 of goods from Jul 30 purchase.", "rows": 3, "solution": [ { "account": "Accounts Payable", "debit": 100 }, { "account": "Purchase Returns and Allowances", "credit": 100 }, { "account": "Return.", "isExplanation": true } ] }
      ],
      "type": "Journalizing"
    }
  },
  {
    "FABM1-Merch-Period-WeightedAvg-008": {
      "id": "set8_periodic_weighted_avg",
      "instructions": "Journalize the transactions using Periodic Inventory System and Weighted Average Costing. Use the following accounts: Cash, Accounts Receivable, Purchases, Purchase Returns and Allowances, Purchase Discounts, Freight In, Sales, Sales Returns and Allowances, Sales Discounts, Accounts Payable, Owner's Capital, Owner's Drawings, Supplies, Supplies Expense, Rent Expense.",
      "subject": "FABM1",
      "title": "Set 8: Periodic Inventory (Weighted Avg)",
      "topic": "Journalizing - Merchandising Business Transactions",
      "transactions": [
        { "date": "Aug 1", "description": "Owner invested ₱70,000 cash.", "rows": 3, "solution": [ { "account": "Cash", "debit": 70000 }, { "account": "Owner's Capital", "credit": 70000 }, { "account": "Investment.", "isExplanation": true } ] },
        { "date": "Aug 2", "description": "Purchased goods ₱12,000 on account, 2/10, n/30.", "rows": 3, "solution": [ { "account": "Purchases", "debit": 12000 }, { "account": "Accounts Payable", "credit": 12000 }, { "account": "Purchase.", "isExplanation": true } ] },
        { "date": "Aug 3", "description": "Paid freight in ₱300.", "rows": 3, "solution": [ { "account": "Freight In", "debit": 300 }, { "account": "Cash", "credit": 300 }, { "account": "Freight.", "isExplanation": true } ] },
        { "date": "Aug 5", "description": "Returned defective goods ₱600.", "rows": 3, "solution": [ { "account": "Accounts Payable", "debit": 600 }, { "account": "Purchase Returns and Allowances", "credit": 600 }, { "account": "Return.", "isExplanation": true } ] },
        { "date": "Aug 8", "description": "Paid supplier in full (with discount).", "rows": 4, "solution": [ { "account": "Accounts Payable", "debit": 11400 }, { "account": "Purchase Discounts", "credit": 228 }, { "account": "Cash", "credit": 11172 }, { "account": "Payment.", "isExplanation": true } ] },
        { "date": "Aug 10", "description": "Sold goods on account ₱6,000.", "rows": 3, "solution": [ { "account": "Accounts Receivable", "debit": 6000 }, { "account": "Sales", "credit": 6000 }, { "account": "Sale.", "isExplanation": true } ] },
        { "date": "Aug 12", "description": "Purchased supplies ₱500 cash.", "rows": 3, "solution": [ { "account": "Supplies", "debit": 500 }, { "account": "Cash", "credit": 500 }, { "account": "Supplies.", "isExplanation": true } ] },
        { "date": "Aug 15", "description": "Customer returned goods ₱500.", "rows": 3, "solution": [ { "account": "Sales Returns and Allowances", "debit": 500 }, { "account": "Accounts Receivable", "credit": 500 }, { "account": "Return.", "isExplanation": true } ] },
        { "date": "Aug 18", "description": "Collected account in full.", "rows": 3, "solution": [ { "account": "Cash", "debit": 5500 }, { "account": "Accounts Receivable", "credit": 5500 }, { "account": "Collection.", "isExplanation": true } ] },
        { "date": "Aug 20", "description": "Purchased goods ₱4,000 cash.", "rows": 3, "solution": [ { "account": "Purchases", "debit": 4000 }, { "account": "Cash", "credit": 4000 }, { "account": "Purchase.", "isExplanation": true } ] },
        { "date": "Aug 22", "description": "Sold goods ₱3,500 cash.", "rows": 3, "solution": [ { "account": "Cash", "debit": 3500 }, { "account": "Sales", "credit": 3500 }, { "account": "Sale.", "isExplanation": true } ] },
        { "date": "Aug 25", "description": "Owner withdrew ₱2,000.", "rows": 3, "solution": [ { "account": "Owner's Drawings", "debit": 2000 }, { "account": "Cash", "credit": 2000 }, { "account": "Withdrawal.", "isExplanation": true } ] },
        { "date": "Aug 28", "description": "Paid rent ₱1,200.", "rows": 3, "solution": [ { "account": "Rent Expense", "debit": 1200 }, { "account": "Cash", "credit": 1200 }, { "account": "Rent.", "isExplanation": true } ] },
        { "date": "Aug 30", "description": "Adjusting entry: Supplies used ₱200.", "rows": 3, "solution": [ { "account": "Supplies Expense", "debit": 200 }, { "account": "Supplies", "credit": 200 }, { "account": "Adjustment.", "isExplanation": true } ] },
        { "date": "Aug 31", "description": "Sold goods on account ₱2,000.", "rows": 3, "solution": [ { "account": "Accounts Receivable", "debit": 2000 }, { "account": "Sales", "credit": 2000 }, { "account": "Sale.", "isExplanation": true } ] }
      ],
      "type": "Journalizing"
    }
  },
  {
    "FABM1-Merch-Period-WeightedAvg-009": {
      "id": "set9_periodic_weighted_avg",
      "instructions": "Journalize the transactions using Periodic Inventory System and Weighted Average Costing. Use the following accounts: Cash, Accounts Receivable, Purchases, Purchase Returns and Allowances, Purchase Discounts, Freight In, Sales, Sales Returns and Allowances, Accounts Payable, Owner's Capital, Salaries Expense, Utilities Expense, Equipment, Notes Payable, Interest Expense.",
      "subject": "FABM1",
      "title": "Set 9: Periodic Inventory (Weighted Avg)",
      "topic": "Journalizing - Merchandising Business Transactions",
      "transactions": [
        { "date": "Sep 1", "description": "Owner invested ₱30,000 cash.", "rows": 3, "solution": [ { "account": "Cash", "debit": 30000 }, { "account": "Owner's Capital", "credit": 30000 }, { "account": "Investment.", "isExplanation": true } ] },
        { "date": "Sep 2", "description": "Purchased goods ₱5,000 on account.", "rows": 3, "solution": [ { "account": "Purchases", "debit": 5000 }, { "account": "Accounts Payable", "credit": 5000 }, { "account": "Purchase.", "isExplanation": true } ] },
        { "date": "Sep 3", "description": "Paid freight in ₱100.", "rows": 3, "solution": [ { "account": "Freight In", "debit": 100 }, { "account": "Cash", "credit": 100 }, { "account": "Freight.", "isExplanation": true } ] },
        { "date": "Sep 5", "description": "Returned goods ₱200.", "rows": 3, "solution": [ { "account": "Accounts Payable", "debit": 200 }, { "account": "Purchase Returns and Allowances", "credit": 200 }, { "account": "Return.", "isExplanation": true } ] },
        { "date": "Sep 8", "description": "Sold goods ₱3,000 on account.", "rows": 3, "solution": [ { "account": "Accounts Receivable", "debit": 3000 }, { "account": "Sales", "credit": 3000 }, { "account": "Sale.", "isExplanation": true } ] },
        { "date": "Sep 10", "description": "Received return ₱100 from customer.", "rows": 3, "solution": [ { "account": "Sales Returns and Allowances", "debit": 100 }, { "account": "Accounts Receivable", "credit": 100 }, { "account": "Return.", "isExplanation": true } ] },
        { "date": "Sep 12", "description": "Paid supplier in full (no discount).", "rows": 3, "solution": [ { "account": "Accounts Payable", "debit": 4800 }, { "account": "Cash", "credit": 4800 }, { "account": "Payment.", "isExplanation": true } ] },
        { "date": "Sep 15", "description": "Collected from customer in full.", "rows": 3, "solution": [ { "account": "Cash", "debit": 2900 }, { "account": "Accounts Receivable", "credit": 2900 }, { "account": "Collection.", "isExplanation": true } ] },
        { "date": "Sep 18", "description": "Purchased Equipment ₱10,000 signing a note.", "rows": 3, "solution": [ { "account": "Equipment", "debit": 10000 }, { "account": "Notes Payable", "credit": 10000 }, { "account": "Equipment.", "isExplanation": true } ] },
        { "date": "Sep 20", "description": "Purchased goods ₱2,500 cash.", "rows": 3, "solution": [ { "account": "Purchases", "debit": 2500 }, { "account": "Cash", "credit": 2500 }, { "account": "Purchase.", "isExplanation": true } ] },
        { "date": "Sep 22", "description": "Sold goods ₱4,000 cash.", "rows": 3, "solution": [ { "account": "Cash", "debit": 4000 }, { "account": "Sales", "credit": 4000 }, { "account": "Sale.", "isExplanation": true } ] },
        { "date": "Sep 25", "description": "Paid salaries ₱1,500.", "rows": 3, "solution": [ { "account": "Salaries Expense", "debit": 1500 }, { "account": "Cash", "credit": 1500 }, { "account": "Salaries.", "isExplanation": true } ] },
        { "date": "Sep 28", "description": "Paid utilities ₱500.", "rows": 3, "solution": [ { "account": "Utilities Expense", "debit": 500 }, { "account": "Cash", "credit": 500 }, { "account": "Utilities.", "isExplanation": true } ] },
        { "date": "Sep 30", "description": "Paid interest on note ₱100.", "rows": 3, "solution": [ { "account": "Interest Expense", "debit": 100 }, { "account": "Cash", "credit": 100 }, { "account": "Interest.", "isExplanation": true } ] },
        { "date": "Sep 30", "description": "Sold goods on account ₱1,000.", "rows": 3, "solution": [ { "account": "Accounts Receivable", "debit": 1000 }, { "account": "Sales", "credit": 1000 }, { "account": "Sale.", "isExplanation": true } ] }
      ],
      "type": "Journalizing"
    }
  },
{
    "FABM1-Merch-Period-WeightedAvg-010": {
      "id": "set10_periodic_weighted_avg",
      "instructions": "Journalize the transactions using Periodic Inventory System and Weighted Average Costing. Use the following accounts: Cash, Accounts Receivable, Purchases, Purchase Returns and Allowances, Purchase Discounts, Freight In, Sales, Sales Returns and Allowances, Sales Discounts, Accounts Payable, Owner's Capital, Owner's Drawings, Freight Out, Advertising Expense, No Entry.",
      "subject": "FABM1",
      "title": "Set 10: Periodic Inventory (Weighted Avg)",
      "topic": "Journalizing - Merchandising Business Transactions",
      "transactions": [
        { "date": "Oct 1", "description": "Owner invested ₱25,000 cash.", "rows": 3, "solution": [ { "account": "Cash", "debit": 25000 }, { "account": "Owner's Capital", "credit": 25000 }, { "account": "Investment.", "isExplanation": true } ] },
        { "date": "Oct 2", "description": "Purchased goods ₱7,000 on account, 1/10, n/30.", "rows": 3, "solution": [ { "account": "Purchases", "debit": 7000 }, { "account": "Accounts Payable", "credit": 7000 }, { "account": "Purchase.", "isExplanation": true } ] },
        { "date": "Oct 3", "description": "Paid freight in ₱150.", "rows": 3, "solution": [ { "account": "Freight In", "debit": 150 }, { "account": "Cash", "credit": 150 }, { "account": "Freight.", "isExplanation": true } ] },
        { "date": "Oct 5", "description": "Sold goods ₱3,000 on account.", "rows": 3, "solution": [ { "account": "Accounts Receivable", "debit": 3000 }, { "account": "Sales", "credit": 3000 }, { "account": "Sale.", "isExplanation": true } ] },
        { "date": "Oct 6", "description": "Paid freight out ₱100.", "rows": 3, "solution": [ { "account": "Freight Out", "debit": 100 }, { "account": "Cash", "credit": 100 }, { "account": "Delivery.", "isExplanation": true } ] },
        { "date": "Oct 8", "description": "Returned ₱200 goods to supplier.", "rows": 3, "solution": [ { "account": "Accounts Payable", "debit": 200 }, { "account": "Purchase Returns and Allowances", "credit": 200 }, { "account": "Return.", "isExplanation": true } ] },
        { "date": "Oct 12", "description": "Paid supplier in full (with discount).", "rows": 4, "solution": [ { "account": "Accounts Payable", "debit": 6800 }, { "account": "Purchase Discounts", "credit": 68 }, { "account": "Cash", "credit": 6732 }, { "account": "Payment.", "isExplanation": true } ] },
        { "date": "Oct 15", "description": "Sold goods cash ₱1,500.", "rows": 3, "solution": [ { "account": "Cash", "debit": 1500 }, { "account": "Sales", "credit": 1500 }, { "account": "Sale.", "isExplanation": true } ] },
        { "date": "Oct 17", "description": "Return from customer ₱100 (from Oct 5 sale).", "rows": 3, "solution": [ { "account": "Sales Returns and Allowances", "debit": 100 }, { "account": "Accounts Receivable", "credit": 100 }, { "account": "Return.", "isExplanation": true } ] },
        { "date": "Oct 20", "description": "Collected from customer in full.", "rows": 3, "solution": [ { "account": "Cash", "debit": 2900 }, { "account": "Accounts Receivable", "credit": 2900 }, { "account": "Collection.", "isExplanation": true } ] },
        { "date": "Oct 22", "description": "Purchased goods cash ₱2,000.", "rows": 3, "solution": [ { "account": "Purchases", "debit": 2000 }, { "account": "Cash", "credit": 2000 }, { "account": "Purchase.", "isExplanation": true } ] },
        { "date": "Oct 25", "description": "Paid advertising ₱300.", "rows": 3, "solution": [ { "account": "Advertising Expense", "debit": 300 }, { "account": "Cash", "credit": 300 }, { "account": "Advertising.", "isExplanation": true } ] },
        { "date": "Oct 28", "description": "Owner withdrew ₱500.", "rows": 3, "solution": [ { "account": "Owner's Drawings", "debit": 500 }, { "account": "Cash", "credit": 500 }, { "account": "Withdrawal.", "isExplanation": true } ] },
        { "date": "Oct 30", "description": "Purchased goods ₱3,000 on account.", "rows": 3, "solution": [ { "account": "Purchases", "debit": 3000 }, { "account": "Accounts Payable", "credit": 3000 }, { "account": "Purchase.", "isExplanation": true } ] },
        { "date": "Oct 31", "description": "Recorded inventory shrinkage (Periodic - No Entry).", "rows": 0, "solution": [ { "account": "No Entry", "debit": "" }, { "account": "No entry.", "isExplanation": true } ] }
      ],
      "type": "Journalizing"
    }
  },
  {
    "FABM1-Merch-Period-WeightedAvg-011": {
      "id": "set11_periodic_weighted_avg",
      "instructions": "Journalize the transactions using Periodic Inventory System and Weighted Average Costing. Use the following accounts: Cash, Accounts Receivable, Purchases, Purchase Returns and Allowances, Purchase Discounts, Freight In, Freight Out, Sales, Sales Returns and Allowances, Accounts Payable, Owner's Capital, Insurance Expense, Salaries Expense, Prepaid Insurance.",
      "subject": "FABM1",
      "title": "Set 11: Periodic Inventory (Weighted Avg)",
      "topic": "Journalizing - Merchandising Business Transactions",
      "transactions": [
        { "date": "Nov 1", "description": "Owner invested ₱40,000 cash.", "rows": 3, "solution": [ { "account": "Cash", "debit": 40000 }, { "account": "Owner's Capital", "credit": 40000 }, { "account": "Investment.", "isExplanation": true } ] },
        { "date": "Nov 2", "description": "Purchased goods ₱8,000 on account, 2/10, n/30.", "rows": 3, "solution": [ { "account": "Purchases", "debit": 8000 }, { "account": "Accounts Payable", "credit": 8000 }, { "account": "Purchase.", "isExplanation": true } ] },
        { "date": "Nov 3", "description": "Paid freight in ₱200.", "rows": 3, "solution": [ { "account": "Freight In", "debit": 200 }, { "account": "Cash", "credit": 200 }, { "account": "Freight.", "isExplanation": true } ] },
        { "date": "Nov 5", "description": "Returned goods ₱300.", "rows": 3, "solution": [ { "account": "Accounts Payable", "debit": 300 }, { "account": "Purchase Returns and Allowances", "credit": 300 }, { "account": "Return.", "isExplanation": true } ] },
        { "date": "Nov 8", "description": "Sold goods on account ₱4,000.", "rows": 3, "solution": [ { "account": "Accounts Receivable", "debit": 4000 }, { "account": "Sales", "credit": 4000 }, { "account": "Sale.", "isExplanation": true } ] },
        { "date": "Nov 10", "description": "Paid freight out ₱100.", "rows": 3, "solution": [ { "account": "Freight Out", "debit": 100 }, { "account": "Cash", "credit": 100 }, { "account": "Delivery.", "isExplanation": true } ] },
        { "date": "Nov 12", "description": "Paid supplier in full (with discount).", "rows": 4, "solution": [ { "account": "Accounts Payable", "debit": 7700 }, { "account": "Purchase Discounts", "credit": 154 }, { "account": "Cash", "credit": 7546 }, { "account": "Payment.", "isExplanation": true } ] },
        { "date": "Nov 15", "description": "Sold goods cash ₱2,000.", "rows": 3, "solution": [ { "account": "Cash", "debit": 2000 }, { "account": "Sales", "credit": 2000 }, { "account": "Sale.", "isExplanation": true } ] },
        { "date": "Nov 18", "description": "Customer returned goods ₱200 (cash refund).", "rows": 3, "solution": [ { "account": "Sales Returns and Allowances", "debit": 200 }, { "account": "Cash", "credit": 200 }, { "account": "Refund.", "isExplanation": true } ] },
        { "date": "Nov 20", "description": "Collected from account customer.", "rows": 3, "solution": [ { "account": "Cash", "debit": 4000 }, { "account": "Accounts Receivable", "credit": 4000 }, { "account": "Collection.", "isExplanation": true } ] },
        { "date": "Nov 22", "description": "Purchased goods cash ₱3,000.", "rows": 3, "solution": [ { "account": "Purchases", "debit": 3000 }, { "account": "Cash", "credit": 3000 }, { "account": "Purchase.", "isExplanation": true } ] },
        { "date": "Nov 25", "description": "Purchased 1-year insurance ₱1,200.", "rows": 3, "solution": [ { "account": "Prepaid Insurance", "debit": 1200 }, { "account": "Cash", "credit": 1200 }, { "account": "Insurance.", "isExplanation": true } ] },
        { "date": "Nov 28", "description": "Paid Salaries ₱1,500.", "rows": 3, "solution": [ { "account": "Salaries Expense", "debit": 1500 }, { "account": "Cash", "credit": 1500 }, { "account": "Salaries.", "isExplanation": true } ] },
        { "date": "Nov 30", "description": "Recorded expired insurance ₱100.", "rows": 3, "solution": [ { "account": "Insurance Expense", "debit": 100 }, { "account": "Prepaid Insurance", "credit": 100 }, { "account": "Adjustment.", "isExplanation": true } ] },
        { "date": "Nov 30", "description": "Sold goods on account ₱1,500.", "rows": 3, "solution": [ { "account": "Accounts Receivable", "debit": 1500 }, { "account": "Sales", "credit": 1500 }, { "account": "Sale.", "isExplanation": true } ] }
      ],
      "type": "Journalizing"
    }
  },
  {
    "FABM1-Merch-Period-WeightedAvg-012": {
      "id": "set12_periodic_weighted_avg",
      "instructions": "Journalize the transactions using Periodic Inventory System and Weighted Average Costing. Use the following accounts: Cash, Accounts Receivable, Purchases, Purchase Returns and Allowances, Purchase Discounts, Freight In, Sales, Sales Returns and Allowances, Sales Discounts, Accounts Payable, Owner's Capital, Owner's Drawings, Utilities Expense, Rent Expense, No Entry.",
      "subject": "FABM1",
      "title": "Set 12: Periodic Inventory (Weighted Avg)",
      "topic": "Journalizing - Merchandising Business Transactions",
      "transactions": [
        { "date": "Dec 1", "description": "Owner invested ₱45,000 cash.", "rows": 3, "solution": [ { "account": "Cash", "debit": 45000 }, { "account": "Owner's Capital", "credit": 45000 }, { "account": "Investment.", "isExplanation": true } ] },
        { "date": "Dec 2", "description": "Purchased goods ₱9,000 on account.", "rows": 3, "solution": [ { "account": "Purchases", "debit": 9000 }, { "account": "Accounts Payable", "credit": 9000 }, { "account": "Purchase.", "isExplanation": true } ] },
        { "date": "Dec 3", "description": "Paid freight in ₱250.", "rows": 3, "solution": [ { "account": "Freight In", "debit": 250 }, { "account": "Cash", "credit": 250 }, { "account": "Freight.", "isExplanation": true } ] },
        { "date": "Dec 5", "description": "Sold goods ₱4,500 on account, 2/10, n/30.", "rows": 3, "solution": [ { "account": "Accounts Receivable", "debit": 4500 }, { "account": "Sales", "credit": 4500 }, { "account": "Sale.", "isExplanation": true } ] },
        { "date": "Dec 7", "description": "Returned goods to supplier ₱400.", "rows": 3, "solution": [ { "account": "Accounts Payable", "debit": 400 }, { "account": "Purchase Returns and Allowances", "credit": 400 }, { "account": "Return.", "isExplanation": true } ] },
        { "date": "Dec 9", "description": "Customer returned goods ₱300.", "rows": 3, "solution": [ { "account": "Sales Returns and Allowances", "debit": 300 }, { "account": "Accounts Receivable", "credit": 300 }, { "account": "Return.", "isExplanation": true } ] },
        { "date": "Dec 12", "description": "Paid supplier in full (no discount terms).", "rows": 3, "solution": [ { "account": "Accounts Payable", "debit": 8600 }, { "account": "Cash", "credit": 8600 }, { "account": "Payment.", "isExplanation": true } ] },
        { "date": "Dec 15", "description": "Collected from customer within discount.", "rows": 4, "solution": [ { "account": "Cash", "debit": 4116 }, { "account": "Sales Discounts", "debit": 84 }, { "account": "Accounts Receivable", "credit": 4200 }, { "account": "Collection.", "isExplanation": true } ] },
        { "date": "Dec 18", "description": "Purchased goods cash ₱3,500.", "rows": 3, "solution": [ { "account": "Purchases", "debit": 3500 }, { "account": "Cash", "credit": 3500 }, { "account": "Purchase.", "isExplanation": true } ] },
        { "date": "Dec 20", "description": "Sold goods cash ₱2,500.", "rows": 3, "solution": [ { "account": "Cash", "debit": 2500 }, { "account": "Sales", "credit": 2500 }, { "account": "Sale.", "isExplanation": true } ] },
        { "date": "Dec 22", "description": "Owner withdrew ₱800.", "rows": 3, "solution": [ { "account": "Owner's Drawings", "debit": 800 }, { "account": "Cash", "credit": 800 }, { "account": "Withdrawal.", "isExplanation": true } ] },
        { "date": "Dec 25", "description": "Paid utilities ₱450.", "rows": 3, "solution": [ { "account": "Utilities Expense", "debit": 450 }, { "account": "Cash", "credit": 450 }, { "account": "Utilities.", "isExplanation": true } ] },
        { "date": "Dec 28", "description": "Paid rent ₱1,000.", "rows": 3, "solution": [ { "account": "Rent Expense", "debit": 1000 }, { "account": "Cash", "credit": 1000 }, { "account": "Rent.", "isExplanation": true } ] },
        { "date": "Dec 30", "description": "Purchased goods on account ₱2,000.", "rows": 3, "solution": [ { "account": "Purchases", "debit": 2000 }, { "account": "Accounts Payable", "credit": 2000 }, { "account": "Purchase.", "isExplanation": true } ] },
        { "date": "Dec 31", "description": "Shrinkage check (Periodic - No Entry).", "rows": 0, "solution": [ { "account": "No Entry", "debit": "" }, { "account": "No entry.", "isExplanation": true } ] }
      ],
      "type": "Journalizing"
    }
  },
  {
    "FABM1-Merch-Period-WeightedAvg-013": {
      "id": "set13_periodic_weighted_avg",
      "instructions": "Journalize the transactions using Periodic Inventory System and Weighted Average Costing. Use the following accounts: Cash, Accounts Receivable, Purchases, Purchase Returns and Allowances, Purchase Discounts, Freight In, Sales, Sales Returns and Allowances, Sales Discounts, Accounts Payable, Owner's Capital, Owner's Drawings, Salaries Expense, Utilities Expense, Supplies.",
      "subject": "FABM1",
      "title": "Set 13: Periodic Inventory (Weighted Avg)",
      "topic": "Journalizing - Merchandising Business Transactions",
      "transactions": [
        { "date": "Jan 1", "description": "Owner invested ₱35,000 cash.", "rows": 3, "solution": [ { "account": "Cash", "debit": 35000 }, { "account": "Owner's Capital", "credit": 35000 }, { "account": "Investment.", "isExplanation": true } ] },
        { "date": "Jan 2", "description": "Purchased goods ₱6,000 on account, 1/15, n/30.", "rows": 3, "solution": [ { "account": "Purchases", "debit": 6000 }, { "account": "Accounts Payable", "credit": 6000 }, { "account": "Purchase.", "isExplanation": true } ] },
        { "date": "Jan 3", "description": "Paid freight in ₱120.", "rows": 3, "solution": [ { "account": "Freight In", "debit": 120 }, { "account": "Cash", "credit": 120 }, { "account": "Freight.", "isExplanation": true } ] },
        { "date": "Jan 5", "description": "Returned ₱300 goods to supplier.", "rows": 3, "solution": [ { "account": "Accounts Payable", "debit": 300 }, { "account": "Purchase Returns and Allowances", "credit": 300 }, { "account": "Return.", "isExplanation": true } ] },
        { "date": "Jan 8", "description": "Sold goods ₱4,000 on account.", "rows": 3, "solution": [ { "account": "Accounts Receivable", "debit": 4000 }, { "account": "Sales", "credit": 4000 }, { "account": "Sale.", "isExplanation": true } ] },
        { "date": "Jan 10", "description": "Paid supplier in full (with discount).", "rows": 4, "solution": [ { "account": "Accounts Payable", "debit": 5700 }, { "account": "Purchase Discounts", "credit": 57 }, { "account": "Cash", "credit": 5643 }, { "account": "Payment.", "isExplanation": true } ] },
        { "date": "Jan 12", "description": "Customer returned goods ₱200.", "rows": 3, "solution": [ { "account": "Sales Returns and Allowances", "debit": 200 }, { "account": "Accounts Receivable", "credit": 200 }, { "account": "Return.", "isExplanation": true } ] },
        { "date": "Jan 15", "description": "Collected from customer in full.", "rows": 3, "solution": [ { "account": "Cash", "debit": 3800 }, { "account": "Accounts Receivable", "credit": 3800 }, { "account": "Collection.", "isExplanation": true } ] },
        { "date": "Jan 18", "description": "Purchased supplies ₱300 cash.", "rows": 3, "solution": [ { "account": "Supplies", "debit": 300 }, { "account": "Cash", "credit": 300 }, { "account": "Supplies.", "isExplanation": true } ] },
        { "date": "Jan 20", "description": "Sold goods cash ₱1,800.", "rows": 3, "solution": [ { "account": "Cash", "debit": 1800 }, { "account": "Sales", "credit": 1800 }, { "account": "Sale.", "isExplanation": true } ] },
        { "date": "Jan 22", "description": "Purchased goods ₱2,000 cash.", "rows": 3, "solution": [ { "account": "Purchases", "debit": 2000 }, { "account": "Cash", "credit": 2000 }, { "account": "Purchase.", "isExplanation": true } ] },
        { "date": "Jan 25", "description": "Paid Salaries ₱1,000.", "rows": 3, "solution": [ { "account": "Salaries Expense", "debit": 1000 }, { "account": "Cash", "credit": 1000 }, { "account": "Salaries.", "isExplanation": true } ] },
        { "date": "Jan 28", "description": "Owner withdrew ₱600.", "rows": 3, "solution": [ { "account": "Owner's Drawings", "debit": 600 }, { "account": "Cash", "credit": 600 }, { "account": "Withdrawal.", "isExplanation": true } ] },
        { "date": "Jan 30", "description": "Paid utilities ₱350.", "rows": 3, "solution": [ { "account": "Utilities Expense", "debit": 350 }, { "account": "Cash", "credit": 350 }, { "account": "Utilities.", "isExplanation": true } ] },
        { "date": "Jan 31", "description": "Sold goods on account ₱1,200.", "rows": 3, "solution": [ { "account": "Accounts Receivable", "debit": 1200 }, { "account": "Sales", "credit": 1200 }, { "account": "Sale.", "isExplanation": true } ] }
      ],
      "type": "Journalizing"
    }
  },
  {
    "FABM1-Merch-Period-WeightedAvg-014": {
      "id": "set14_periodic_weighted_avg",
      "instructions": "Journalize the transactions using Periodic Inventory System and Weighted Average Costing. Use the following accounts: Cash, Accounts Receivable, Purchases, Purchase Returns and Allowances, Purchase Discounts, Freight In, Sales, Sales Returns and Allowances, Sales Discounts, Accounts Payable, Owner's Capital, Owner's Drawings, Advertising Expense, Rent Expense, No Entry.",
      "subject": "FABM1",
      "title": "Set 14: Periodic Inventory (Weighted Avg)",
      "topic": "Journalizing - Merchandising Business Transactions",
      "transactions": [
        { "date": "Feb 1", "description": "Owner invested ₱55,000 cash.", "rows": 3, "solution": [ { "account": "Cash", "debit": 55000 }, { "account": "Owner's Capital", "credit": 55000 }, { "account": "Investment.", "isExplanation": true } ] },
        { "date": "Feb 2", "description": "Purchased goods ₱9,000 on account.", "rows": 3, "solution": [ { "account": "Purchases", "debit": 9000 }, { "account": "Accounts Payable", "credit": 9000 }, { "account": "Purchase.", "isExplanation": true } ] },
        { "date": "Feb 3", "description": "Paid freight in ₱180.", "rows": 3, "solution": [ { "account": "Freight In", "debit": 180 }, { "account": "Cash", "credit": 180 }, { "account": "Freight.", "isExplanation": true } ] },
        { "date": "Feb 5", "description": "Returned goods ₱450.", "rows": 3, "solution": [ { "account": "Accounts Payable", "debit": 450 }, { "account": "Purchase Returns and Allowances", "credit": 450 }, { "account": "Return.", "isExplanation": true } ] },
        { "date": "Feb 8", "description": "Sold goods ₱5,500 on account, 2/10, n/30.", "rows": 3, "solution": [ { "account": "Accounts Receivable", "debit": 5500 }, { "account": "Sales", "credit": 5500 }, { "account": "Sale.", "isExplanation": true } ] },
        { "date": "Feb 10", "description": "Paid supplier in full.", "rows": 3, "solution": [ { "account": "Accounts Payable", "debit": 8550 }, { "account": "Cash", "credit": 8550 }, { "account": "Payment.", "isExplanation": true } ] },
        { "date": "Feb 12", "description": "Customer returned goods ₱250.", "rows": 3, "solution": [ { "account": "Sales Returns and Allowances", "debit": 250 }, { "account": "Accounts Receivable", "credit": 250 }, { "account": "Return.", "isExplanation": true } ] },
        { "date": "Feb 15", "description": "Collected from customer (with discount).", "rows": 4, "solution": [ { "account": "Cash", "debit": 5145 }, { "account": "Sales Discounts", "debit": 105 }, { "account": "Accounts Receivable", "credit": 5250 }, { "account": "Collection.", "isExplanation": true } ] },
        { "date": "Feb 18", "description": "Purchased goods ₱3,500 cash.", "rows": 3, "solution": [ { "account": "Purchases", "debit": 3500 }, { "account": "Cash", "credit": 3500 }, { "account": "Purchase.", "isExplanation": true } ] },
        { "date": "Feb 20", "description": "Sold goods cash ₱2,800.", "rows": 3, "solution": [ { "account": "Cash", "debit": 2800 }, { "account": "Sales", "credit": 2800 }, { "account": "Sale.", "isExplanation": true } ] },
        { "date": "Feb 22", "description": "Paid Advertising ₱400.", "rows": 3, "solution": [ { "account": "Advertising Expense", "debit": 400 }, { "account": "Cash", "credit": 400 }, { "account": "Advertising.", "isExplanation": true } ] },
        { "date": "Feb 25", "description": "Owner withdrew ₱900.", "rows": 3, "solution": [ { "account": "Owner's Drawings", "debit": 900 }, { "account": "Cash", "credit": 900 }, { "account": "Withdrawal.", "isExplanation": true } ] },
        { "date": "Feb 28", "description": "Paid Rent ₱1,100.", "rows": 3, "solution": [ { "account": "Rent Expense", "debit": 1100 }, { "account": "Cash", "credit": 1100 }, { "account": "Rent.", "isExplanation": true } ] },
        { "date": "Feb 28", "description": "Sold goods on account ₱1,800.", "rows": 3, "solution": [ { "account": "Accounts Receivable", "debit": 1800 }, { "account": "Sales", "credit": 1800 }, { "account": "Sale.", "isExplanation": true } ] },
        { "date": "Feb 28", "description": "Shrinkage adjustment (Periodic - No Entry).", "rows": 0, "solution": [ { "account": "No Entry", "debit": "" }, { "account": "No entry.", "isExplanation": true } ] }
      ],
      "type": "Journalizing"
    }
  },
  {
    "FABM1-Merch-Period-WeightedAvg-015": {
      "id": "set15_periodic_weighted_avg",
      "instructions": "Journalize the transactions using Periodic Inventory System and Weighted Average Costing. Use the following accounts: Cash, Accounts Receivable, Purchases, Purchase Returns and Allowances, Purchase Discounts, Freight In, Freight Out, Sales, Sales Returns and Allowances, Sales Discounts, Accounts Payable, Owner's Capital, Owner's Drawings, Salaries Expense, Utilities Expense.",
      "subject": "FABM1",
      "title": "Set 15: Periodic Inventory (Weighted Avg)",
      "topic": "Journalizing - Merchandising Business Transactions",
      "transactions": [
        { "date": "Mar 1", "description": "Owner invested ₱28,000 cash.", "rows": 3, "solution": [ { "account": "Cash", "debit": 28000 }, { "account": "Owner's Capital", "credit": 28000 }, { "account": "Investment.", "isExplanation": true } ] },
        { "date": "Mar 2", "description": "Purchased goods ₱6,500 on account, 1/10, n/30.", "rows": 3, "solution": [ { "account": "Purchases", "debit": 6500 }, { "account": "Accounts Payable", "credit": 6500 }, { "account": "Purchase.", "isExplanation": true } ] },
        { "date": "Mar 3", "description": "Paid freight in ₱130.", "rows": 3, "solution": [ { "account": "Freight In", "debit": 130 }, { "account": "Cash", "credit": 130 }, { "account": "Freight.", "isExplanation": true } ] },
        { "date": "Mar 5", "description": "Returned goods ₱350.", "rows": 3, "solution": [ { "account": "Accounts Payable", "debit": 350 }, { "account": "Purchase Returns and Allowances", "credit": 350 }, { "account": "Return.", "isExplanation": true } ] },
        { "date": "Mar 8", "description": "Sold goods ₱4,200 on account.", "rows": 3, "solution": [ { "account": "Accounts Receivable", "debit": 4200 }, { "account": "Sales", "credit": 4200 }, { "account": "Sale.", "isExplanation": true } ] },
        { "date": "Mar 9", "description": "Paid freight out ₱80.", "rows": 3, "solution": [ { "account": "Freight Out", "debit": 80 }, { "account": "Cash", "credit": 80 }, { "account": "Delivery.", "isExplanation": true } ] },
        { "date": "Mar 11", "description": "Paid supplier in full (with discount).", "rows": 4, "solution": [ { "account": "Accounts Payable", "debit": 6150 }, { "account": "Purchase Discounts", "credit": 61.5 }, { "account": "Cash", "credit": 6088.5 }, { "account": "Payment.", "isExplanation": true } ] },
        { "date": "Mar 14", "description": "Customer returned goods ₱150.", "rows": 3, "solution": [ { "account": "Sales Returns and Allowances", "debit": 150 }, { "account": "Accounts Receivable", "credit": 150 }, { "account": "Return.", "isExplanation": true } ] },
        { "date": "Mar 16", "description": "Collected from customer in full.", "rows": 3, "solution": [ { "account": "Cash", "debit": 4050 }, { "account": "Accounts Receivable", "credit": 4050 }, { "account": "Collection.", "isExplanation": true } ] },
        { "date": "Mar 18", "description": "Purchased goods cash ₱1,800.", "rows": 3, "solution": [ { "account": "Purchases", "debit": 1800 }, { "account": "Cash", "credit": 1800 }, { "account": "Purchase.", "isExplanation": true } ] },
        { "date": "Mar 20", "description": "Sold goods cash ₱2,200.", "rows": 3, "solution": [ { "account": "Cash", "debit": 2200 }, { "account": "Sales", "credit": 2200 }, { "account": "Sale.", "isExplanation": true } ] },
        { "date": "Mar 22", "description": "Owner withdrew ₱700.", "rows": 3, "solution": [ { "account": "Owner's Drawings", "debit": 700 }, { "account": "Cash", "credit": 700 }, { "account": "Withdrawal.", "isExplanation": true } ] },
        { "date": "Mar 25", "description": "Paid Salaries ₱1,300.", "rows": 3, "solution": [ { "account": "Salaries Expense", "debit": 1300 }, { "account": "Cash", "credit": 1300 }, { "account": "Salaries.", "isExplanation": true } ] },
        { "date": "Mar 28", "description": "Paid Utilities ₱400.", "rows": 3, "solution": [ { "account": "Utilities Expense", "debit": 400 }, { "account": "Cash", "credit": 400 }, { "account": "Utilities.", "isExplanation": true } ] },
        { "date": "Mar 30", "description": "Purchased goods on account ₱2,500.", "rows": 3, "solution": [ { "account": "Purchases", "debit": 2500 }, { "account": "Accounts Payable", "credit": 2500 }, { "account": "Purchase.", "isExplanation": true } ] }
      ],
      "type": "Journalizing"
    }
  },
  {
    "FABM1-Merch-Perpe-FIFO-001": {
      "id": "set1_perpetual_fifo_comprehensive",
      "instructions": "Journalize the transactions using Perpetual Inventory System and FIFO Costing. Use the following accounts: Accounts Payable, Accounts Receivable, Cash, Cost of Goods Sold, Merchandise Inventory, Sales, Sales Returns and Allowances, Sales Discounts, Freight Out, Utilities Expense, Owner's Capital, Owner's Drawings, Rent Expense, Salaries Expense, Supplies.",
      "subject": "FABM1",
      "title": "Set 1: FIFO Costing (Perpetual)",
      "topic": "Journalizing - Merchandising Business Transactions",
      "transactions": [
        { "date": "Dec 1", "description": "Owner invested ₱100,000 cash.", "rows": 3, "solution": [ { "account": "Cash", "debit": 100000 }, { "account": "Owner's Capital", "credit": 100000 }, { "account": "Initial investment.", "isExplanation": true } ] },
        { "date": "Dec 2", "description": "Purchased 2,000 units at ₱20 each on account, terms 2/10, n/30.", "rows": 3, "solution": [ { "account": "Merchandise Inventory", "debit": 40000 }, { "account": "Accounts Payable", "credit": 40000 }, { "account": "Purchased 2000 units @ 20.", "isExplanation": true } ] },
        { "date": "Dec 3", "description": "Paid freight in ₱1,000 cash.", "rows": 3, "solution": [ { "account": "Merchandise Inventory", "debit": 1000 }, { "account": "Cash", "credit": 1000 }, { "account": "Freight added to inventory.", "isExplanation": true } ] },
        { "date": "Dec 5", "description": "Returned 200 defective units to supplier.", "rows": 3, "solution": [ { "account": "Accounts Payable", "debit": 4000 }, { "account": "Merchandise Inventory", "credit": 4000 }, { "account": "Returned 200 units.", "isExplanation": true } ] },
        { "date": "Dec 7", "description": "Purchased 1,000 units at ₱25 each on account.", "rows": 3, "solution": [ { "account": "Merchandise Inventory", "debit": 25000 }, { "account": "Accounts Payable", "credit": 25000 }, { "account": "Purchased 1000 units.", "isExplanation": true } ] },
        { "date": "Dec 10", "description": "Sold 1,500 units on account @ ₱50 each, terms 1/10, n/30.", "rows": 5, "solution": [ { "account": "Accounts Receivable", "debit": 75000 }, { "account": "Sales", "credit": 75000 }, { "account": "Cost of Goods Sold", "debit": 30750 }, { "account": "Merchandise Inventory", "credit": 30750 }, { "account": "FIFO: (1800 units rem @ 20.50) => 1500 * 20.50 = 30750.", "isExplanation": true } ] },
        { "date": "Dec 11", "description": "Paid balance for Dec 2 purchase within discount period. (40000 - 4000 return = 36000 bal. 2% disc).", "rows": 3, "solution": [ { "account": "Accounts Payable", "debit": 36000 }, { "account": "Merchandise Inventory", "credit": 720 }, { "account": "Cash", "credit": 35280 }, { "account": "Paid account with discount.", "isExplanation": true } ] },
        { "date": "Dec 12", "description": "Customer returned 100 units from Dec 10 sale. (Good condition).", "rows": 5, "solution": [ { "account": "Sales Returns and Allowances", "debit": 5000 }, { "account": "Accounts Receivable", "credit": 5000 }, { "account": "Merchandise Inventory", "debit": 2050 }, { "account": "Cost of Goods Sold", "credit": 2050 }, { "account": "Return restocked @ 20.50.", "isExplanation": true } ] },
        { "date": "Dec 14", "description": "Paid freight out ₱500 cash.", "rows": 3, "solution": [ { "account": "Freight Out", "debit": 500 }, { "account": "Cash", "credit": 500 }, { "account": "Delivery expense.", "isExplanation": true } ] },
        { "date": "Dec 19", "description": "Received payment from Dec 10 customer within discount. (75000 - 5000 return = 70000 bal. 1% disc).", "rows": 3, "solution": [ { "account": "Cash", "debit": 69300 }, { "account": "Sales Discounts", "debit": 700 }, { "account": "Accounts Receivable", "credit": 70000 }, { "account": "Collection.", "isExplanation": true } ] },
        { "date": "Dec 20", "description": "Purchased supplies ₱500 cash.", "rows": 3, "solution": [ { "account": "Supplies", "debit": 500 }, { "account": "Cash", "credit": 500 }, { "account": "Supplies.", "isExplanation": true } ] },
        { "date": "Dec 25", "description": "Owner withdrew ₱2,000 cash.", "rows": 3, "solution": [ { "account": "Owner's Drawings", "debit": 2000 }, { "account": "Cash", "credit": 2000 }, { "account": "Withdrawal.", "isExplanation": true } ] },
        { "date": "Dec 28", "description": "Paid rent ₱1,500.", "rows": 3, "solution": [ { "account": "Rent Expense", "debit": 1500 }, { "account": "Cash", "credit": 1500 }, { "account": "Rent.", "isExplanation": true } ] },
        { "date": "Dec 30", "description": "Paid salaries ₱2,000.", "rows": 3, "solution": [ { "account": "Salaries Expense", "debit": 2000 }, { "account": "Cash", "credit": 2000 }, { "account": "Salaries.", "isExplanation": true } ] },
        { "date": "Dec 31", "description": "Accrued utilities ₱300.", "rows": 3, "solution": [ { "account": "Utilities Expense", "debit": 300 }, { "account": "Accounts Payable", "credit": 300 }, { "account": "Accrual.", "isExplanation": true } ] }
      ],
      "type": "Journalizing"
    }
  },
  {
    "FABM1-Merch-Perpe-FIFO-002": {
      "id": "set2_perpetual_fifo",
      "instructions": "Journalize the transactions using Perpetual Inventory System and FIFO Costing. Use the following accounts: Accounts Payable, Accounts Receivable, Cash, Cost of Goods Sold, Merchandise Inventory, Sales, Sales Returns and Allowances, Sales Discounts, Freight Out, Utilities Expense, Owner's Capital, Owner's Drawings, No Entry.",
      "subject": "FABM1",
      "title": "Set 2: FIFO Costing (Perpetual)",
      "topic": "Journalizing - Merchandising Business Transactions",
      "transactions": [
        { "date": "Feb 1", "description": "Owner invested ₱20,000 cash.", "rows": 3, "solution": [ { "account": "Cash", "debit": 20000 }, { "account": "Owner's Capital", "credit": 20000 }, { "account": "Investment.", "isExplanation": true } ] },
        { "date": "Feb 2", "description": "Purchased 200 units @ ₱50 each, terms 2/10, n/30.", "rows": 3, "solution": [ { "account": "Merchandise Inventory", "debit": 10000 }, { "account": "Accounts Payable", "credit": 10000 }, { "account": "Purchased 200 units @ ₱50.", "isExplanation": true } ] },
        { "date": "Feb 3", "description": "Paid freight in ₱200 cash.", "rows": 3, "solution": [ { "account": "Merchandise Inventory", "debit": 200 }, { "account": "Cash", "credit": 200 }, { "account": "Freight added to inventory.", "isExplanation": true } ] },
        { "date": "Feb 5", "description": "Sold 100 units @ ₱80 on account, terms 1/10, n/30.", "rows": 5, "solution": [ { "account": "Accounts Receivable", "debit": 8000 }, { "account": "Sales", "credit": 8000 }, { "account": "Cost of Goods Sold", "debit": 5100 }, { "account": "Merchandise Inventory", "credit": 5100 }, { "account": "COGS: 100 * (50 + 1 freight/unit) = 5100.", "isExplanation": true } ] },
        { "date": "Feb 7", "description": "Returned 10 defective units to supplier from Feb 2 purchase.", "rows": 3, "solution": [ { "account": "Accounts Payable", "debit": 500 }, { "account": "Merchandise Inventory", "credit": 500 }, { "account": "Return reduces inventory.", "isExplanation": true } ] },
        { "date": "Feb 9", "description": "Purchased 100 units @ ₱54 each.", "rows": 3, "solution": [ { "account": "Merchandise Inventory", "debit": 5400 }, { "account": "Accounts Payable", "credit": 5400 }, { "account": "Purchased 100 units.", "isExplanation": true } ] },
        { "date": "Feb 11", "description": "Paid supplier for Feb 2 purchase balance, within discount period.", "rows": 3, "solution": [ { "account": "Accounts Payable", "debit": 9500 }, { "account": "Merchandise Inventory", "credit": 190 }, { "account": "Cash", "credit": 9310 }, { "account": "Discount reduces inventory cost.", "isExplanation": true } ] },
        { "date": "Feb 14", "description": "Customer from Feb 5 returned 10 units.", "rows": 5, "solution": [ { "account": "Sales Returns and Allowances", "debit": 800 }, { "account": "Accounts Receivable", "credit": 800 }, { "account": "Merchandise Inventory", "debit": 510 }, { "account": "Cost of Goods Sold", "credit": 510 }, { "account": "Return to inventory.", "isExplanation": true } ] },
        { "date": "Feb 15", "description": "Collected from Feb 5 customer within discount period.", "rows": 3, "solution": [ { "account": "Cash", "debit": 7128 }, { "account": "Sales Discounts", "debit": 72 }, { "account": "Accounts Receivable", "credit": 7200 }, { "account": "Collection with discount.", "isExplanation": true } ] },
        { "date": "Feb 18", "description": "Sold 50 units for cash ₱85 each.", "rows": 5, "solution": [ { "account": "Cash", "debit": 4250 }, { "account": "Sales", "credit": 4250 }, { "account": "Cost of Goods Sold", "debit": 2550 }, { "account": "Merchandise Inventory", "credit": 2550 }, { "account": "FIFO: 50 from Feb 2 batch @ 51.", "isExplanation": true } ] },
        { "date": "Feb 20", "description": "Paid freight out ₱100.", "rows": 3, "solution": [ { "account": "Freight Out", "debit": 100 }, { "account": "Cash", "credit": 100 }, { "account": "Expense.", "isExplanation": true } ] },
        { "date": "Feb 22", "description": "Purchased 50 units @ ₱56.", "rows": 3, "solution": [ { "account": "Merchandise Inventory", "debit": 2800 }, { "account": "Accounts Payable", "credit": 2800 }, { "account": "Purchased 50 units.", "isExplanation": true } ] },
        { "date": "Feb 25", "description": "Owner withdrew ₱1,000 cash.", "rows": 3, "solution": [ { "account": "Owner's Drawings", "debit": 1000 }, { "account": "Cash", "credit": 1000 }, { "account": "Withdrawal.", "isExplanation": true } ] },
        { "date": "Feb 27", "description": "Paid utilities ₱400.", "rows": 3, "solution": [ { "account": "Utilities Expense", "debit": 400 }, { "account": "Cash", "credit": 400 }, { "account": "Expense.", "isExplanation": true } ] },
        { "date": "Feb 28", "description": "Inventory shrinkage adjustment ₱50.", "rows": 3, "solution": [ { "account": "Cost of Goods Sold", "debit": 50 }, { "account": "Merchandise Inventory", "credit": 50 }, { "account": "Adjust inventory to physical count.", "isExplanation": true } ] }
      ],
      "type": "Journalizing"
    }
  },
  {
    "FABM1-Merch-Perpe-FIFO-003": {
      "id": "set3_perpetual_fifo",
      "instructions": "Journalize the transactions using Perpetual Inventory System and FIFO Costing. Use the following accounts: Accounts Payable, Accounts Receivable, Cash, Cost of Goods Sold, Merchandise Inventory, Sales, Sales Returns and Allowances, Sales Discounts, Freight Out, Rent Expense, Owner's Capital, Owner's Drawings.",
      "subject": "FABM1",
      "title": "Set 3: FIFO Costing (Perpetual)",
      "topic": "Journalizing - Merchandising Business Transactions",
      "transactions": [
        { "date": "Mar 1", "description": "Owner invested ₱30,000 cash.", "rows": 3, "solution": [ { "account": "Cash", "debit": 30000 }, { "account": "Owner's Capital", "credit": 30000 }, { "account": "Investment.", "isExplanation": true } ] },
        { "date": "Mar 2", "description": "Purchased 500 units @ ₱20 each, trade discount 5%, terms n/30.", "rows": 3, "solution": [ { "account": "Merchandise Inventory", "debit": 9500 }, { "account": "Accounts Payable", "credit": 9500 }, { "account": "Net cost ₱19/unit.", "isExplanation": true } ] },
        { "date": "Mar 3", "description": "Paid freight in ₱500.", "rows": 3, "solution": [ { "account": "Merchandise Inventory", "debit": 500 }, { "account": "Cash", "credit": 500 }, { "account": "Freight added. Total cost ₱10000 ($20/unit).", "isExplanation": true } ] },
        { "date": "Mar 5", "description": "Sold 300 units @ ₱40.", "rows": 5, "solution": [ { "account": "Accounts Receivable", "debit": 12000 }, { "account": "Sales", "credit": 12000 }, { "account": "Cost of Goods Sold", "debit": 6000 }, { "account": "Merchandise Inventory", "credit": 6000 }, { "account": "COGS: 300 * 20 = 6000.", "isExplanation": true } ] },
        { "date": "Mar 7", "description": "Purchased 200 units @ ₱25.", "rows": 3, "solution": [ { "account": "Merchandise Inventory", "debit": 5000 }, { "account": "Accounts Payable", "credit": 5000 }, { "account": "Purchased 200 units.", "isExplanation": true } ] },
        { "date": "Mar 10", "description": "Returned 20 units to supplier from Mar 7 purchase.", "rows": 3, "solution": [ { "account": "Accounts Payable", "debit": 500 }, { "account": "Merchandise Inventory", "credit": 500 }, { "account": "Return reduces inventory.", "isExplanation": true } ] },
        { "date": "Mar 12", "description": "Sold 150 units @ ₱45, terms 2/10, n/30.", "rows": 5, "solution": [ { "account": "Accounts Receivable", "debit": 6750 }, { "account": "Sales", "credit": 6750 }, { "account": "Cost of Goods Sold", "debit": 3375 }, { "account": "Merchandise Inventory", "credit": 3375 }, { "account": "COGS: 150 * 22.50 = 3375.", "isExplanation": true } ] },
        { "date": "Mar 14", "description": "Paid freight out ₱150.", "rows": 3, "solution": [ { "account": "Freight Out", "debit": 150 }, { "account": "Cash", "credit": 150 }, { "account": "Expense.", "isExplanation": true } ] },
        { "date": "Mar 16", "description": "Customer returned 5 units from Mar 12 sale. (Good condition).", "rows": 5, "solution": [ { "account": "Sales Returns and Allowances", "debit": 225 }, { "account": "Accounts Receivable", "credit": 225 }, { "account": "Merchandise Inventory", "debit": 100 }, { "account": "Cost of Goods Sold", "credit": 100 }, { "account": "Restock @ 20.", "isExplanation": true } ] },
        { "date": "Mar 20", "description": "Received payment from Mar 12 customer within discount.", "rows": 3, "solution": [ { "account": "Cash", "debit": 6394.5 }, { "account": "Sales Discounts", "debit": 130.5 }, { "account": "Accounts Receivable", "credit": 6525 }, { "account": "Collection.", "isExplanation": true } ] },
        { "date": "Mar 22", "description": "Paid supplier for Mar 2 purchase.", "rows": 3, "solution": [ { "account": "Accounts Payable", "debit": 9500 }, { "account": "Cash", "credit": 9500 }, { "account": "Payment.", "isExplanation": true } ] },
        { "date": "Mar 25", "description": "Purchased 100 units @ ₱30 cash.", "rows": 3, "solution": [ { "account": "Merchandise Inventory", "debit": 3000 }, { "account": "Cash", "credit": 3000 }, { "account": "Cash purchase.", "isExplanation": true } ] },
        { "date": "Mar 28", "description": "Paid rent ₱1,200.", "rows": 3, "solution": [ { "account": "Rent Expense", "debit": 1200 }, { "account": "Cash", "credit": 1200 }, { "account": "Expense.", "isExplanation": true } ] },
        { "date": "Mar 30", "description": "Sold 50 units for cash ₱60.", "rows": 5, "solution": [ { "account": "Cash", "debit": 3000 }, { "account": "Sales", "credit": 3000 }, { "account": "Cost of Goods Sold", "debit": 1000 }, { "account": "Merchandise Inventory", "credit": 1000 }, { "account": "FIFO: 50 from Mar 2 @ 20.", "isExplanation": true } ] },
        { "date": "Mar 31", "description": "Owner withdrew ₱500.", "rows": 3, "solution": [ { "account": "Owner's Drawings", "debit": 500 }, { "account": "Cash", "credit": 500 }, { "account": "Withdrawal.", "isExplanation": true } ] }
      ],
      "type": "Journalizing"
    }
  },
  {
    "FABM1-Merch-Perpe-FIFO-004": {
      "id": "set4_perpetual_fifo",
      "instructions": "Journalize the transactions using Perpetual Inventory System and FIFO Costing. Use the following accounts: Accounts Payable, Accounts Receivable, Cash, Cost of Goods Sold, Merchandise Inventory, Sales, Sales Returns and Allowances, Sales Discounts, Freight Out, Advertising Expense, Owner's Capital, Owner's Drawings.",
      "subject": "FABM1",
      "title": "Set 4: FIFO Costing (Perpetual)",
      "topic": "Journalizing - Merchandising Business Transactions",
      "transactions": [
        { "date": "Apr 1", "description": "Owner invested ₱60,000 cash.", "rows": 3, "solution": [ { "account": "Cash", "debit": 60000 }, { "account": "Owner's Capital", "credit": 60000 }, { "account": "Initial investment.", "isExplanation": true } ] },
        { "date": "Apr 2", "description": "Purchased 400 units @ ₱10, terms 2/10, n/30.", "rows": 3, "solution": [ { "account": "Merchandise Inventory", "debit": 4000 }, { "account": "Accounts Payable", "credit": 4000 }, { "account": "Purchased 400 units.", "isExplanation": true } ] },
        { "date": "Apr 3", "description": "Paid freight in ₱100.", "rows": 3, "solution": [ { "account": "Merchandise Inventory", "debit": 100 }, { "account": "Cash", "credit": 100 }, { "account": "Freight increases cost to 10.25/unit.", "isExplanation": true } ] },
        { "date": "Apr 5", "description": "Returned 20 units to supplier (₱10 credit).", "rows": 3, "solution": [ { "account": "Accounts Payable", "debit": 200 }, { "account": "Merchandise Inventory", "credit": 200 }, { "account": "Return.", "isExplanation": true } ] },
        { "date": "Apr 8", "description": "Sold 200 units @ ₱25.", "rows": 5, "solution": [ { "account": "Accounts Receivable", "debit": 5000 }, { "account": "Sales", "credit": 5000 }, { "account": "Cost of Goods Sold", "debit": 2050 }, { "account": "Merchandise Inventory", "credit": 2050 }, { "account": "COGS: 200 * 10.25 = 2050.", "isExplanation": true } ] },
        { "date": "Apr 10", "description": "Paid freight out ₱50.", "rows": 3, "solution": [ { "account": "Freight Out", "debit": 50 }, { "account": "Cash", "credit": 50 }, { "account": "Expense.", "isExplanation": true } ] },
        { "date": "Apr 12", "description": "Paid supplier balance within discount period. (Bal 3800 * .98).", "rows": 3, "solution": [ { "account": "Accounts Payable", "debit": 3800 }, { "account": "Merchandise Inventory", "credit": 76 }, { "account": "Cash", "credit": 3724 }, { "account": "Disc reduces inv cost.", "isExplanation": true } ] },
        { "date": "Apr 15", "description": "Purchased 300 units @ ₱12.", "rows": 3, "solution": [ { "account": "Merchandise Inventory", "debit": 3600 }, { "account": "Accounts Payable", "credit": 3600 }, { "account": "Purchased 300 units.", "isExplanation": true } ] },
        { "date": "Apr 17", "description": "Sold 300 units @ ₱28.", "rows": 5, "solution": [ { "account": "Accounts Receivable", "debit": 8400 }, { "account": "Sales", "credit": 8400 }, { "account": "Cost of Goods Sold", "debit": 3285 }, { "account": "Merchandise Inventory", "credit": 3285 }, { "account": "FIFO: 180@10.25 (1845) + 120@12 (1440).", "isExplanation": true } ] },
        { "date": "Apr 19", "description": "Customer returned 10 units from Apr 17 sale.", "rows": 5, "solution": [ { "account": "Sales Returns and Allowances", "debit": 280 }, { "account": "Accounts Receivable", "credit": 280 }, { "account": "Merchandise Inventory", "debit": 120 }, { "account": "Cost of Goods Sold", "credit": 120 }, { "account": "Return 10 @ 12.", "isExplanation": true } ] },
        { "date": "Apr 21", "description": "Paid Advertising ₱200.", "rows": 3, "solution": [ { "account": "Advertising Expense", "debit": 200 }, { "account": "Cash", "credit": 200 }, { "account": "Expense.", "isExplanation": true } ] },
        { "date": "Apr 23", "description": "Collected from Apr 8 customer.", "rows": 3, "solution": [ { "account": "Cash", "debit": 5000 }, { "account": "Accounts Receivable", "credit": 5000 }, { "account": "Collection.", "isExplanation": true } ] },
        { "date": "Apr 26", "description": "Purchased 100 units @ ₱15.", "rows": 3, "solution": [ { "account": "Merchandise Inventory", "debit": 1500 }, { "account": "Accounts Payable", "credit": 1500 }, { "account": "Purchased 100 units.", "isExplanation": true } ] },
        { "date": "Apr 28", "description": "Paid supplier for Apr 15 purchase.", "rows": 3, "solution": [ { "account": "Accounts Payable", "debit": 3600 }, { "account": "Cash", "credit": 3600 }, { "account": "Payment.", "isExplanation": true } ] },
        { "date": "Apr 30", "description": "Owner withdrew ₱1,500.", "rows": 3, "solution": [ { "account": "Owner's Drawings", "debit": 1500 }, { "account": "Cash", "credit": 1500 }, { "account": "Withdrawal.", "isExplanation": true } ] }
      ],
      "type": "Journalizing"
    }
  },
  {
    "FABM1-Merch-Perpe-FIFO-005": {
      "id": "set5_perpetual_fifo",
      "instructions": "Journalize the transactions using Perpetual Inventory System and FIFO Costing. Use the following accounts: Accounts Payable, Accounts Receivable, Cash, Cost of Goods Sold, Merchandise Inventory, Sales, Sales Returns and Allowances, Sales Discounts, Freight Out, Supplies, Owner's Capital, Owner's Drawings, Salaries Expense, Utilities Expense.",
      "subject": "FABM1",
      "title": "Set 5: FIFO Costing (Perpetual)",
      "topic": "Journalizing - Merchandising Business Transactions",
      "transactions": [
        { "date": "May 1", "description": "Purchased 100 units at ₱10 each.", "rows": 3, "solution": [ { "account": "Merchandise Inventory", "debit": 1000 }, { "account": "Accounts Payable", "credit": 1000 }, { "account": "Purchase.", "isExplanation": true } ] },
        { "date": "May 3", "description": "Purchased 100 units at ₱12 each.", "rows": 3, "solution": [ { "account": "Merchandise Inventory", "debit": 1200 }, { "account": "Accounts Payable", "credit": 1200 }, { "account": "Purchase.", "isExplanation": true } ] },
        { "date": "May 5", "description": "Sold 150 units for ₱20 each.", "rows": 5, "solution": [ { "account": "Accounts Receivable", "debit": 3000 }, { "account": "Sales", "credit": 3000 }, { "account": "Cost of Goods Sold", "debit": 1600 }, { "account": "Merchandise Inventory", "credit": 1600 }, { "account": "FIFO: 100 @ 10 + 50 @ 12 = 1600.", "isExplanation": true } ] },
        { "date": "May 8", "description": "Returned 10 defective units from May 3 purchase (Supplier grants ₱12 credit).", "rows": 3, "solution": [ { "account": "Accounts Payable", "debit": 120 }, { "account": "Merchandise Inventory", "credit": 120 }, { "account": "Return.", "isExplanation": true } ] },
        { "date": "May 10", "description": "Purchased 60 units at ₱13.25 each.", "rows": 3, "solution": [ { "account": "Merchandise Inventory", "debit": 795 }, { "account": "Accounts Payable", "credit": 795 }, { "account": "Purchase.", "isExplanation": true } ] },
        { "date": "May 12", "description": "Paid freight ₱25 on May 10 purchase.", "rows": 3, "solution": [ { "account": "Merchandise Inventory", "debit": 25 }, { "account": "Cash", "credit": 25 }, { "account": "Freight.", "isExplanation": true } ] },
        { "date": "May 15", "description": "Sold 80 units for ₱25 each.", "rows": 5, "solution": [ { "account": "Accounts Receivable", "debit": 2000 }, { "account": "Sales", "credit": 2000 }, { "account": "Cost of Goods Sold", "debit": 984 }, { "account": "Merchandise Inventory", "credit": 984 }, { "account": "FIFO: Rem 40@12 (480) + 40@(13.25+.41frt) (546.4) = ~984.", "isExplanation": true } ] },
        { "date": "May 20", "description": "Customer returned 10 units from May 15 sale.", "rows": 5, "solution": [ { "account": "Sales Returns and Allowances", "debit": 250 }, { "account": "Accounts Receivable", "credit": 250 }, { "account": "Merchandise Inventory", "debit": 136 }, { "account": "Cost of Goods Sold", "credit": 136 }, { "account": "Return restocked at latest layer.", "isExplanation": true } ] },
        { "date": "May 22", "description": "Paid supplier for May 1 purchase in full.", "rows": 3, "solution": [ { "account": "Accounts Payable", "debit": 1000 }, { "account": "Cash", "credit": 1000 }, { "account": "Payment.", "isExplanation": true } ] },
        { "date": "May 24", "description": "Paid freight out ₱50 on May 15 sale.", "rows": 3, "solution": [ { "account": "Freight Out", "debit": 50 }, { "account": "Cash", "credit": 50 }, { "account": "Delivery expense.", "isExplanation": true } ] },
        { "date": "May 25", "description": "Purchased Supplies ₱100 cash (Not merchandise).", "rows": 3, "solution": [ { "account": "Supplies", "debit": 100 }, { "account": "Cash", "credit": 100 }, { "account": "Supplies purchase.", "isExplanation": true } ] },
        { "date": "May 28", "description": "Owner withdrew ₱500.", "rows": 3, "solution": [ { "account": "Owner's Drawings", "debit": 500 }, { "account": "Cash", "credit": 500 }, { "account": "Withdrawal.", "isExplanation": true } ] },
        { "date": "May 29", "description": "Received payment from May 15 customer within discount (Terms 2/10).", "rows": 3, "solution": [ { "account": "Cash", "debit": 1715 }, { "account": "Sales Discounts", "debit": 35 }, { "account": "Accounts Receivable", "credit": 1750 }, { "account": "Collection.", "isExplanation": true } ] },
        { "date": "May 30", "description": "Paid salaries ₱500.", "rows": 3, "solution": [ { "account": "Salaries Expense", "debit": 500 }, { "account": "Cash", "credit": 500 }, { "account": "Expense.", "isExplanation": true } ] },
        { "date": "May 31", "description": "Sold remaining 30 units for cash ₱30 each.", "rows": 5, "solution": [ { "account": "Cash", "debit": 900 }, { "account": "Sales", "credit": 900 }, { "account": "Cost of Goods Sold", "debit": 409.8 }, { "account": "Merchandise Inventory", "credit": 409.8 }, { "account": "FIFO: Rem 30 @ 13.66.", "isExplanation": true } ] }
      ],
      "type": "Journalizing"
    }
  },
  {
    "FABM1-Merch-Perpe-FIFO-006": {
      "id": "set6_perpetual_fifo",
      "instructions": "Journalize the transactions using Perpetual Inventory System and FIFO Costing. Use the following accounts: Cash, Accounts Receivable, Purchases, Purchase Returns and Allowances, Purchase Discounts, Freight In, Freight Out, Sales, Sales Returns and Allowances, Sales Discounts, Accounts Payable, Owner's Capital, Owner's Drawings, Rent Expense, Salaries Expense, Merchandise Inventory, Cost of Goods Sold.",
      "subject": "FABM1",
      "title": "Set 6: Perpetual Inventory (FIFO)",
      "topic": "Journalizing - Merchandising Business Transactions",
      "transactions": [
        { "date": "Jun 1", "description": "Owner invested ₱100,000 cash.", "rows": 3, "solution": [ { "account": "Cash", "debit": 100000 }, { "account": "Owner's Capital", "credit": 100000 }, { "account": "Investment.", "isExplanation": true } ] },
        { "date": "Jun 2", "description": "Purchased 500 units @ ₱20 on account, terms 2/10, n/30.", "rows": 3, "solution": [ { "account": "Merchandise Inventory", "debit": 10000 }, { "account": "Accounts Payable", "credit": 10000 }, { "account": "Purchased 500 units @ ₱20.", "isExplanation": true } ] },
        { "date": "Jun 3", "description": "Paid freight in ₱200.", "rows": 3, "solution": [ { "account": "Merchandise Inventory", "debit": 200 }, { "account": "Cash", "credit": 200 }, { "account": "Freight.", "isExplanation": true } ] },
        { "date": "Jun 5", "description": "Returned 25 units to supplier (₱20 credit/unit).", "rows": 3, "solution": [ { "account": "Accounts Payable", "debit": 500 }, { "account": "Merchandise Inventory", "credit": 500 }, { "account": "Return.", "isExplanation": true } ] },
        { "date": "Jun 8", "description": "Sold 100 units @ ₱50 on account.", "rows": 5, "solution": [ { "account": "Accounts Receivable", "debit": 5000 }, { "account": "Sales", "credit": 5000 }, { "account": "Cost of Goods Sold", "debit": 2040 }, { "account": "Merchandise Inventory", "credit": 2040 }, { "account": "COGS: 100 * (20 + 0.4 frt).", "isExplanation": true } ] },
        { "date": "Jun 10", "description": "Paid freight out ₱100.", "rows": 3, "solution": [ { "account": "Freight Out", "debit": 100 }, { "account": "Cash", "credit": 100 }, { "account": "Delivery.", "isExplanation": true } ] },
        { "date": "Jun 12", "description": "Paid supplier in full (with discount).", "rows": 3, "solution": [ { "account": "Accounts Payable", "debit": 9500 }, { "account": "Merchandise Inventory", "credit": 190 }, { "account": "Cash", "credit": 9310 }, { "account": "Payment with discount.", "isExplanation": true } ] },
        { "date": "Jun 15", "description": "Customer returned 4 units from Jun 8 sale. (Restock).", "rows": 5, "solution": [ { "account": "Sales Returns and Allowances", "debit": 200 }, { "account": "Accounts Receivable", "credit": 200 }, { "account": "Merchandise Inventory", "debit": 81.68 }, { "account": "Cost of Goods Sold", "credit": 81.68 }, { "account": "Return to inventory.", "isExplanation": true } ] },
        { "date": "Jun 18", "description": "Collected from customer (no discount).", "rows": 3, "solution": [ { "account": "Cash", "debit": 4800 }, { "account": "Accounts Receivable", "credit": 4800 }, { "account": "Collection.", "isExplanation": true } ] },
        { "date": "Jun 20", "description": "Purchased 80 units @ ₱25 cash.", "rows": 3, "solution": [ { "account": "Merchandise Inventory", "debit": 2000 }, { "account": "Cash", "credit": 2000 }, { "account": "Cash purchase.", "isExplanation": true } ] },
        { "date": "Jun 25", "description": "Sold 50 units @ ₱60 cash. (FIFO: from remaining initial batch).", "rows": 5, "solution": [ { "account": "Cash", "debit": 3000 }, { "account": "Sales", "credit": 3000 }, { "account": "Cost of Goods Sold", "debit": 1020 }, { "account": "Merchandise Inventory", "credit": 1020 }, { "account": "COGS: 50 * 20.40.", "isExplanation": true } ] },
        { "date": "Jun 28", "description": "Paid Rent ₱1,500.", "rows": 3, "solution": [ { "account": "Rent Expense", "debit": 1500 }, { "account": "Cash", "credit": 1500 }, { "account": "Rent.", "isExplanation": true } ] },
        { "date": "Jun 29", "description": "Paid Salaries ₱2,000.", "rows": 3, "solution": [ { "account": "Salaries Expense", "debit": 2000 }, { "account": "Cash", "credit": 2000 }, { "account": "Salaries.", "isExplanation": true } ] },
        { "date": "Jun 30", "description": "Owner withdrew ₱1,000.", "rows": 3, "solution": [ { "account": "Owner's Drawings", "debit": 1000 }, { "account": "Cash", "credit": 1000 }, { "account": "Withdrawal.", "isExplanation": true } ] },
        { "date": "Jun 30", "description": "Purchased 200 units @ ₱25 on account.", "rows": 3, "solution": [ { "account": "Merchandise Inventory", "debit": 5000 }, { "account": "Accounts Payable", "credit": 5000 }, { "account": "Purchase.", "isExplanation": true } ] }
      ],
      "type": "Journalizing"
    }
  },
{
    "FABM1-Merch-Perpe-FIFO-007": {
      "id": "set7_perpetual_fifo",
      "instructions": "Journalize the transactions using Perpetual Inventory System and FIFO Costing. Use the following accounts: Cash, Accounts Receivable, Purchases, Purchase Returns and Allowances, Purchase Discounts, Freight In, Freight Out, Sales, Sales Returns and Allowances, Sales Discounts, Accounts Payable, Owner's Capital, Advertising Expense, Utilities Expense, Merchandise Inventory, Cost of Goods Sold.",
      "subject": "FABM1",
      "title": "Set 7: Perpetual Inventory (FIFO)",
      "topic": "Journalizing - Merchandising Business Transactions",
      "transactions": [
        { "date": "Jul 1", "description": "Owner invested ₱60,000 cash.", "rows": 3, "solution": [ { "account": "Cash", "debit": 60000 }, { "account": "Owner's Capital", "credit": 60000 }, { "account": "Investment.", "isExplanation": true } ] },
        { "date": "Jul 2", "description": "Purchased 400 units @ ₱20, terms 2/10, n/30.", "rows": 3, "solution": [ { "account": "Merchandise Inventory", "debit": 8000 }, { "account": "Accounts Payable", "credit": 8000 }, { "account": "Purchased 400 units.", "isExplanation": true } ] },
        { "date": "Jul 3", "description": "Paid freight in ₱150.", "rows": 3, "solution": [ { "account": "Merchandise Inventory", "debit": 150 }, { "account": "Cash", "credit": 150 }, { "account": "Freight.", "isExplanation": true } ] },
        { "date": "Jul 5", "description": "Returned 20 units (₱20 credit/unit).", "rows": 3, "solution": [ { "account": "Accounts Payable", "debit": 400 }, { "account": "Merchandise Inventory", "credit": 400 }, { "account": "Return.", "isExplanation": true } ] },
        { "date": "Jul 7", "description": "Sold 100 units @ ₱40, terms 1/10, n/30.", "rows": 5, "solution": [ { "account": "Accounts Receivable", "debit": 4000 }, { "account": "Sales", "credit": 4000 }, { "account": "Cost of Goods Sold", "debit": 2039.5 }, { "account": "Merchandise Inventory", "credit": 2039.5 }, { "account": "COGS: 100 units * 20.395.", "isExplanation": true } ] },
        { "date": "Jul 8", "description": "Paid freight out ₱100.", "rows": 3, "solution": [ { "account": "Freight Out", "debit": 100 }, { "account": "Cash", "credit": 100 }, { "account": "Delivery.", "isExplanation": true } ] },
        { "date": "Jul 12", "description": "Paid supplier in full (with discount).", "rows": 3, "solution": [ { "account": "Accounts Payable", "debit": 7600 }, { "account": "Merchandise Inventory", "credit": 152 }, { "account": "Cash", "credit": 7448 }, { "account": "Payment.", "isExplanation": true } ] },
        { "date": "Jul 15", "description": "Received return of 7 units from customer.", "rows": 5, "solution": [ { "account": "Sales Returns and Allowances", "debit": 280 }, { "account": "Accounts Receivable", "credit": 280 }, { "account": "Merchandise Inventory", "debit": 142.76 }, { "account": "Cost of Goods Sold", "credit": 142.76 }, { "account": "Return.", "isExplanation": true } ] },
        { "date": "Jul 17", "description": "Collected from customer (with discount).", "rows": 3, "solution": [ { "account": "Cash", "debit": 3682.8 }, { "account": "Sales Discounts", "debit": 37.2 }, { "account": "Accounts Receivable", "credit": 3720 }, { "account": "Collection.", "isExplanation": true } ] },
        { "date": "Jul 20", "description": "Purchased 60 units @ ₱25 cash.", "rows": 3, "solution": [ { "account": "Merchandise Inventory", "debit": 1500 }, { "account": "Cash", "credit": 1500 }, { "account": "Cash purchase.", "isExplanation": true } ] },
        { "date": "Jul 22", "description": "Sold 50 units @ ₱40 cash.", "rows": 5, "solution": [ { "account": "Cash", "debit": 2000 }, { "account": "Sales", "credit": 2000 }, { "account": "Cost of Goods Sold", "debit": 1019.75 }, { "account": "Merchandise Inventory", "credit": 1019.75 }, { "account": "FIFO COGS.", "isExplanation": true } ] },
        { "date": "Jul 25", "description": "Paid advertising ₱500.", "rows": 3, "solution": [ { "account": "Advertising Expense", "debit": 500 }, { "account": "Cash", "credit": 500 }, { "account": "Advertising.", "isExplanation": true } ] },
        { "date": "Jul 28", "description": "Paid utilities ₱600.", "rows": 3, "solution": [ { "account": "Utilities Expense", "debit": 600 }, { "account": "Cash", "credit": 600 }, { "account": "Utilities.", "isExplanation": true } ] },
        { "date": "Jul 30", "description": "Purchased 100 units @ ₱30 on account.", "rows": 3, "solution": [ { "account": "Merchandise Inventory", "debit": 3000 }, { "account": "Accounts Payable", "credit": 3000 }, { "account": "Purchase.", "isExplanation": true } ] },
        { "date": "Jul 31", "description": "Returned 3 units from Jul 30 purchase.", "rows": 3, "solution": [ { "account": "Accounts Payable", "debit": 90 }, { "account": "Merchandise Inventory", "credit": 90 }, { "account": "Return.", "isExplanation": true } ] }
      ],
      "type": "Journalizing"
    }
  },
  {
    "FABM1-Merch-Perpe-FIFO-008": {
      "id": "set8_perpetual_fifo",
      "instructions": "Journalize the transactions using Perpetual Inventory System and FIFO Costing. Use the following accounts: Cash, Accounts Receivable, Purchases, Purchase Returns and Allowances, Purchase Discounts, Freight In, Sales, Sales Returns and Allowances, Sales Discounts, Accounts Payable, Owner's Capital, Owner's Drawings, Supplies, Supplies Expense, Rent Expense, Merchandise Inventory, Cost of Goods Sold.",
      "subject": "FABM1",
      "title": "Set 8: Perpetual Inventory (FIFO)",
      "topic": "Journalizing - Merchandising Business Transactions",
      "transactions": [
        { "date": "Aug 1", "description": "Owner invested ₱70,000 cash.", "rows": 3, "solution": [ { "account": "Cash", "debit": 70000 }, { "account": "Owner's Capital", "credit": 70000 }, { "account": "Investment.", "isExplanation": true } ] },
        { "date": "Aug 2", "description": "Purchased 600 units @ ₱20 on account, 2/10, n/30.", "rows": 3, "solution": [ { "account": "Merchandise Inventory", "debit": 12000 }, { "account": "Accounts Payable", "credit": 12000 }, { "account": "Purchase.", "isExplanation": true } ] },
        { "date": "Aug 3", "description": "Paid freight in ₱300.", "rows": 3, "solution": [ { "account": "Merchandise Inventory", "debit": 300 }, { "account": "Cash", "credit": 300 }, { "account": "Freight.", "isExplanation": true } ] },
        { "date": "Aug 5", "description": "Returned 30 defective units (₱20 credit).", "rows": 3, "solution": [ { "account": "Accounts Payable", "debit": 600 }, { "account": "Merchandise Inventory", "credit": 600 }, { "account": "Return.", "isExplanation": true } ] },
        { "date": "Aug 8", "description": "Paid supplier in full (with discount).", "rows": 3, "solution": [ { "account": "Accounts Payable", "debit": 11400 }, { "account": "Merchandise Inventory", "credit": 228 }, { "account": "Cash", "credit": 11172 }, { "account": "Payment.", "isExplanation": true } ] },
        { "date": "Aug 10", "description": "Sold 200 units @ ₱30.", "rows": 5, "solution": [ { "account": "Accounts Receivable", "debit": 6000 }, { "account": "Sales", "credit": 6000 }, { "account": "Cost of Goods Sold", "debit": 4025.26 }, { "account": "Merchandise Inventory", "credit": 4025.26 }, { "account": "COGS Moving Avg.", "isExplanation": true } ] },
        { "date": "Aug 12", "description": "Purchased supplies ₱500 cash.", "rows": 3, "solution": [ { "account": "Supplies", "debit": 500 }, { "account": "Cash", "credit": 500 }, { "account": "Supplies.", "isExplanation": true } ] },
        { "date": "Aug 15", "description": "Customer returned 16 units (approx ₱31.25 sales price).", "rows": 5, "solution": [ { "account": "Sales Returns and Allowances", "debit": 500 }, { "account": "Accounts Receivable", "credit": 500 }, { "account": "Merchandise Inventory", "debit": 322.02 }, { "account": "Cost of Goods Sold", "credit": 322.02 }, { "account": "Return.", "isExplanation": true } ] },
        { "date": "Aug 18", "description": "Collected account in full.", "rows": 3, "solution": [ { "account": "Cash", "debit": 5500 }, { "account": "Accounts Receivable", "credit": 5500 }, { "account": "Collection.", "isExplanation": true } ] },
        { "date": "Aug 20", "description": "Purchased 160 units @ ₱25 cash.", "rows": 3, "solution": [ { "account": "Merchandise Inventory", "debit": 4000 }, { "account": "Cash", "credit": 4000 }, { "account": "Purchase.", "isExplanation": true } ] },
        { "date": "Aug 22", "description": "Sold 80 units @ ₱50 cash.", "rows": 5, "solution": [ { "account": "Cash", "debit": 4000 }, { "account": "Sales", "credit": 4000 }, { "account": "Cost of Goods Sold", "debit": 2041.67 }, { "account": "Merchandise Inventory", "credit": 2041.67 }, { "account": "Sale.", "isExplanation": true } ] },
        { "date": "Aug 25", "description": "Owner withdrew ₱2,000.", "rows": 3, "solution": [ { "account": "Owner's Drawings", "debit": 2000 }, { "account": "Cash", "credit": 2000 }, { "account": "Withdrawal.", "isExplanation": true } ] },
        { "date": "Aug 28", "description": "Paid rent ₱1,200.", "rows": 3, "solution": [ { "account": "Rent Expense", "debit": 1200 }, { "account": "Cash", "credit": 1200 }, { "account": "Rent.", "isExplanation": true } ] },
        { "date": "Aug 30", "description": "Adjusting entry: Supplies used ₱200.", "rows": 3, "solution": [ { "account": "Supplies Expense", "debit": 200 }, { "account": "Supplies", "credit": 200 }, { "account": "Adjustment.", "isExplanation": true } ] },
        { "date": "Aug 31", "description": "Sold 50 units on account @ ₱40.", "rows": 5, "solution": [ { "account": "Accounts Receivable", "debit": 2000 }, { "account": "Sales", "credit": 2000 }, { "account": "Cost of Goods Sold", "debit": 1087.21 }, { "account": "Merchandise Inventory", "credit": 1087.21 }, { "account": "Sale.", "isExplanation": true } ] }
      ],
      "type": "Journalizing"
    }
  },
  {
    "FABM1-Merch-Perpe-FIFO-009": {
      "id": "set9_perpetual_fifo",
      "instructions": "Journalize the transactions using Perpetual Inventory System and FIFO Costing. Use the following accounts: Cash, Accounts Receivable, Purchases, Purchase Returns and Allowances, Purchase Discounts, Freight In, Sales, Sales Returns and Allowances, Accounts Payable, Owner's Capital, Salaries Expense, Utilities Expense, Equipment, Notes Payable, Interest Expense, Merchandise Inventory, Cost of Goods Sold.",
      "subject": "FABM1",
      "title": "Set 9: Perpetual Inventory (FIFO)",
      "topic": "Journalizing - Merchandising Business Transactions",
      "transactions": [
        { "date": "Sep 1", "description": "Owner invested ₱30,000 cash.", "rows": 3, "solution": [ { "account": "Cash", "debit": 30000 }, { "account": "Owner's Capital", "credit": 30000 }, { "account": "Investment.", "isExplanation": true } ] },
        { "date": "Sep 2", "description": "Purchased 200 units @ ₱25 on account.", "rows": 3, "solution": [ { "account": "Merchandise Inventory", "debit": 5000 }, { "account": "Accounts Payable", "credit": 5000 }, { "account": "Purchase.", "isExplanation": true } ] },
        { "date": "Sep 3", "description": "Paid freight in ₱100.", "rows": 3, "solution": [ { "account": "Merchandise Inventory", "debit": 100 }, { "account": "Cash", "credit": 100 }, { "account": "Freight.", "isExplanation": true } ] },
        { "date": "Sep 5", "description": "Returned 8 units (₱25 credit).", "rows": 3, "solution": [ { "account": "Accounts Payable", "debit": 200 }, { "account": "Merchandise Inventory", "credit": 200 }, { "account": "Return.", "isExplanation": true } ] },
        { "date": "Sep 8", "description": "Sold 60 units @ ₱50.", "rows": 5, "solution": [ { "account": "Accounts Receivable", "debit": 3000 }, { "account": "Sales", "credit": 3000 }, { "account": "Cost of Goods Sold", "debit": 1531.25 }, { "account": "Merchandise Inventory", "credit": 1531.25 }, { "account": "COGS Moving Avg.", "isExplanation": true } ] },
        { "date": "Sep 10", "description": "Received return 2 units.", "rows": 5, "solution": [ { "account": "Sales Returns and Allowances", "debit": 100 }, { "account": "Accounts Receivable", "credit": 100 }, { "account": "Merchandise Inventory", "debit": 51.04 }, { "account": "Cost of Goods Sold", "credit": 51.04 }, { "account": "Return.", "isExplanation": true } ] },
        { "date": "Sep 12", "description": "Paid supplier in full (no discount).", "rows": 3, "solution": [ { "account": "Accounts Payable", "debit": 4800 }, { "account": "Cash", "credit": 4800 }, { "account": "Payment.", "isExplanation": true } ] },
        { "date": "Sep 15", "description": "Collected from customer in full.", "rows": 3, "solution": [ { "account": "Cash", "debit": 2900 }, { "account": "Accounts Receivable", "credit": 2900 }, { "account": "Collection.", "isExplanation": true } ] },
        { "date": "Sep 18", "description": "Purchased Equipment ₱10,000 signing a note.", "rows": 3, "solution": [ { "account": "Equipment", "debit": 10000 }, { "account": "Notes Payable", "credit": 10000 }, { "account": "Equipment.", "isExplanation": true } ] },
        { "date": "Sep 20", "description": "Purchased 100 units @ ₱25 cash.", "rows": 3, "solution": [ { "account": "Merchandise Inventory", "debit": 2500 }, { "account": "Cash", "credit": 2500 }, { "account": "Purchase.", "isExplanation": true } ] },
        { "date": "Sep 22", "description": "Sold 80 units @ ₱50 cash.", "rows": 5, "solution": [ { "account": "Cash", "debit": 4000 }, { "account": "Sales", "credit": 4000 }, { "account": "Cost of Goods Sold", "debit": 2041.67 }, { "account": "Merchandise Inventory", "credit": 2041.67 }, { "account": "Sale.", "isExplanation": true } ] },
        { "date": "Sep 25", "description": "Paid salaries ₱1,500.", "rows": 3, "solution": [ { "account": "Salaries Expense", "debit": 1500 }, { "account": "Cash", "credit": 1500 }, { "account": "Salaries.", "isExplanation": true } ] },
        { "date": "Sep 28", "description": "Paid utilities ₱500.", "rows": 3, "solution": [ { "account": "Utilities Expense", "debit": 500 }, { "account": "Cash", "credit": 500 }, { "account": "Utilities.", "isExplanation": true } ] },
        { "date": "Sep 30", "description": "Paid interest on note ₱100.", "rows": 3, "solution": [ { "account": "Interest Expense", "debit": 100 }, { "account": "Cash", "credit": 100 }, { "account": "Interest.", "isExplanation": true } ] },
        { "date": "Sep 30", "description": "Sold 20 units @ ₱50.", "rows": 5, "solution": [ { "account": "Accounts Receivable", "debit": 1000 }, { "account": "Sales", "credit": 1000 }, { "account": "Cost of Goods Sold", "debit": 510.42 }, { "account": "Merchandise Inventory", "credit": 510.42 }, { "account": "Sale.", "isExplanation": true } ] }
      ],
      "type": "Journalizing"
    }
  },
{
    "FABM1-Merch-Perpe-FIFO-010": {
      "id": "set10_perpetual_fifo",
      "instructions": "Journalize the transactions using Perpetual Inventory System and FIFO Costing. Use the following accounts: Cash, Accounts Receivable, Purchases, Purchase Returns and Allowances, Purchase Discounts, Freight In, Sales, Sales Returns and Allowances, Sales Discounts, Accounts Payable, Owner's Capital, Owner's Drawings, Freight Out, Advertising Expense, Merchandise Inventory, Cost of Goods Sold.",
      "subject": "FABM1",
      "title": "Set 10: Perpetual Inventory (FIFO)",
      "topic": "Journalizing - Merchandising Business Transactions",
      "transactions": [
        { "date": "Oct 1", "description": "Owner invested ₱25,000 cash.", "rows": 3, "solution": [ { "account": "Cash", "debit": 25000 }, { "account": "Owner's Capital", "credit": 25000 }, { "account": "Investment.", "isExplanation": true } ] },
        { "date": "Oct 2", "description": "Purchased 350 units @ ₱20, 1/10, n/30.", "rows": 3, "solution": [ { "account": "Merchandise Inventory", "debit": 7000 }, { "account": "Accounts Payable", "credit": 7000 }, { "account": "Purchase.", "isExplanation": true } ] },
        { "date": "Oct 3", "description": "Paid freight in ₱150.", "rows": 3, "solution": [ { "account": "Merchandise Inventory", "debit": 150 }, { "account": "Cash", "credit": 150 }, { "account": "Freight.", "isExplanation": true } ] },
        { "date": "Oct 5", "description": "Sold 100 units @ ₱30.", "rows": 5, "solution": [ { "account": "Accounts Receivable", "debit": 3000 }, { "account": "Sales", "credit": 3000 }, { "account": "Cost of Goods Sold", "debit": 2042.85 }, { "account": "Merchandise Inventory", "credit": 2042.85 }, { "account": "COGS.", "isExplanation": true } ] },
        { "date": "Oct 6", "description": "Paid freight out ₱100.", "rows": 3, "solution": [ { "account": "Freight Out", "debit": 100 }, { "account": "Cash", "credit": 100 }, { "account": "Delivery.", "isExplanation": true } ] },
        { "date": "Oct 8", "description": "Returned 10 units (₱20 credit).", "rows": 3, "solution": [ { "account": "Accounts Payable", "debit": 200 }, { "account": "Merchandise Inventory", "credit": 200 }, { "account": "Return.", "isExplanation": true } ] },
        { "date": "Oct 12", "description": "Paid supplier in full (with discount).", "rows": 3, "solution": [ { "account": "Accounts Payable", "debit": 6800 }, { "account": "Merchandise Inventory", "credit": 68 }, { "account": "Cash", "credit": 6732 }, { "account": "Payment.", "isExplanation": true } ] },
        { "date": "Oct 15", "description": "Sold 50 units @ ₱30.", "rows": 5, "solution": [ { "account": "Cash", "debit": 1500 }, { "account": "Sales", "credit": 1500 }, { "account": "Cost of Goods Sold", "debit": 1021.43 }, { "account": "Merchandise Inventory", "credit": 1021.43 }, { "account": "Sale.", "isExplanation": true } ] },
        { "date": "Oct 17", "description": "Return from customer 3.33 units (approx ₱100 sales).", "rows": 5, "solution": [ { "account": "Sales Returns and Allowances", "debit": 100 }, { "account": "Accounts Receivable", "credit": 100 }, { "account": "Merchandise Inventory", "debit": 68.09 }, { "account": "Cost of Goods Sold", "credit": 68.09 }, { "account": "Return.", "isExplanation": true } ] },
        { "date": "Oct 20", "description": "Collected from customer in full.", "rows": 3, "solution": [ { "account": "Cash", "debit": 2900 }, { "account": "Accounts Receivable", "credit": 2900 }, { "account": "Collection.", "isExplanation": true } ] },
        { "date": "Oct 22", "description": "Purchased 100 units @ ₱20 cash.", "rows": 3, "solution": [ { "account": "Merchandise Inventory", "debit": 2000 }, { "account": "Cash", "credit": 2000 }, { "account": "Purchase.", "isExplanation": true } ] },
        { "date": "Oct 25", "description": "Paid advertising ₱300.", "rows": 3, "solution": [ { "account": "Advertising Expense", "debit": 300 }, { "account": "Cash", "credit": 300 }, { "account": "Advertising.", "isExplanation": true } ] },
        { "date": "Oct 28", "description": "Owner withdrew ₱500.", "rows": 3, "solution": [ { "account": "Owner's Drawings", "debit": 500 }, { "account": "Cash", "credit": 500 }, { "account": "Withdrawal.", "isExplanation": true } ] },
        { "date": "Oct 30", "description": "Purchased 150 units @ ₱20.", "rows": 3, "solution": [ { "account": "Merchandise Inventory", "debit": 3000 }, { "account": "Accounts Payable", "credit": 3000 }, { "account": "Purchase.", "isExplanation": true } ] },
        { "date": "Oct 31", "description": "Recorded inventory shrinkage (Perpetual - Adjust).", "rows": 3, "solution": [ { "account": "Cost of Goods Sold", "debit": 50 }, { "account": "Merchandise Inventory", "credit": 50 }, { "account": "Shrinkage.", "isExplanation": true } ] }
      ],
      "type": "Journalizing"
    }
  },
  {
    "FABM1-Merch-Perpe-FIFO-011": {
      "id": "set11_perpetual_fifo",
      "instructions": "Journalize the transactions using Perpetual Inventory System and FIFO Costing. Use the following accounts: Cash, Accounts Receivable, Purchases, Purchase Returns and Allowances, Purchase Discounts, Freight In, Freight Out, Sales, Sales Returns and Allowances, Accounts Payable, Owner's Capital, Insurance Expense, Salaries Expense, Prepaid Insurance, Merchandise Inventory, Cost of Goods Sold.",
      "subject": "FABM1",
      "title": "Set 11: Perpetual Inventory (FIFO)",
      "topic": "Journalizing - Merchandising Business Transactions",
      "transactions": [
        { "date": "Nov 1", "description": "Owner invested ₱40,000 cash.", "rows": 3, "solution": [ { "account": "Cash", "debit": 40000 }, { "account": "Owner's Capital", "credit": 40000 }, { "account": "Investment.", "isExplanation": true } ] },
        { "date": "Nov 2", "description": "Purchased 400 units @ ₱20, 2/10, n/30.", "rows": 3, "solution": [ { "account": "Merchandise Inventory", "debit": 8000 }, { "account": "Accounts Payable", "credit": 8000 }, { "account": "Purchase.", "isExplanation": true } ] },
        { "date": "Nov 3", "description": "Paid freight in ₱200.", "rows": 3, "solution": [ { "account": "Merchandise Inventory", "debit": 200 }, { "account": "Cash", "credit": 200 }, { "account": "Freight.", "isExplanation": true } ] },
        { "date": "Nov 5", "description": "Returned 15 units (₱20 credit).", "rows": 3, "solution": [ { "account": "Accounts Payable", "debit": 300 }, { "account": "Merchandise Inventory", "credit": 300 }, { "account": "Return.", "isExplanation": true } ] },
        { "date": "Nov 8", "description": "Sold 100 units @ ₱40.", "rows": 5, "solution": [ { "account": "Accounts Receivable", "debit": 4000 }, { "account": "Sales", "credit": 4000 }, { "account": "Cost of Goods Sold", "debit": 2051.94 }, { "account": "Merchandise Inventory", "credit": 2051.94 }, { "account": "Sale.", "isExplanation": true } ] },
        { "date": "Nov 10", "description": "Paid freight out ₱100.", "rows": 3, "solution": [ { "account": "Freight Out", "debit": 100 }, { "account": "Cash", "credit": 100 }, { "account": "Delivery.", "isExplanation": true } ] },
        { "date": "Nov 12", "description": "Paid supplier in full (with discount).", "rows": 3, "solution": [ { "account": "Accounts Payable", "debit": 7700 }, { "account": "Merchandise Inventory", "credit": 154 }, { "account": "Cash", "credit": 7546 }, { "account": "Payment.", "isExplanation": true } ] },
        { "date": "Nov 15", "description": "Sold 50 units @ ₱40.", "rows": 5, "solution": [ { "account": "Cash", "debit": 2000 }, { "account": "Sales", "credit": 2000 }, { "account": "Cost of Goods Sold", "debit": 1025.97 }, { "account": "Merchandise Inventory", "credit": 1025.97 }, { "account": "Sale.", "isExplanation": true } ] },
        { "date": "Nov 18", "description": "Customer returned 5 units.", "rows": 5, "solution": [ { "account": "Sales Returns and Allowances", "debit": 200 }, { "account": "Cash", "credit": 200 }, { "account": "Merchandise Inventory", "debit": 102.6 }, { "account": "Cost of Goods Sold", "credit": 102.6 }, { "account": "Return.", "isExplanation": true } ] },
        { "date": "Nov 20", "description": "Collected from account customer.", "rows": 3, "solution": [ { "account": "Cash", "debit": 4000 }, { "account": "Accounts Receivable", "credit": 4000 }, { "account": "Collection.", "isExplanation": true } ] },
        { "date": "Nov 22", "description": "Purchased 150 units @ ₱20 cash.", "rows": 3, "solution": [ { "account": "Merchandise Inventory", "debit": 3000 }, { "account": "Cash", "credit": 3000 }, { "account": "Purchase.", "isExplanation": true } ] },
        { "date": "Nov 25", "description": "Purchased 1-year insurance ₱1,200.", "rows": 3, "solution": [ { "account": "Prepaid Insurance", "debit": 1200 }, { "account": "Cash", "credit": 1200 }, { "account": "Insurance.", "isExplanation": true } ] },
        { "date": "Nov 28", "description": "Paid Salaries ₱1,500.", "rows": 3, "solution": [ { "account": "Salaries Expense", "debit": 1500 }, { "account": "Cash", "credit": 1500 }, { "account": "Salaries.", "isExplanation": true } ] },
        { "date": "Nov 30", "description": "Recorded expired insurance ₱100.", "rows": 3, "solution": [ { "account": "Insurance Expense", "debit": 100 }, { "account": "Prepaid Insurance", "credit": 100 }, { "account": "Adjustment.", "isExplanation": true } ] },
        { "date": "Nov 30", "description": "Sold 37.5 units (approx ₱1500 sales).", "rows": 5, "solution": [ { "account": "Accounts Receivable", "debit": 1500 }, { "account": "Sales", "credit": 1500 }, { "account": "Cost of Goods Sold", "debit": 769.48 }, { "account": "Merchandise Inventory", "credit": 769.48 }, { "account": "Sale.", "isExplanation": true } ] }
      ],
      "type": "Journalizing"
    }
  },
  {
    "FABM1-Merch-Perpe-FIFO-012": {
      "id": "set12_perpetual_fifo",
      "instructions": "Journalize the transactions using Perpetual Inventory System and FIFO Costing. Use the following accounts: Cash, Accounts Receivable, Purchases, Purchase Returns and Allowances, Purchase Discounts, Freight In, Sales, Sales Returns and Allowances, Sales Discounts, Accounts Payable, Owner's Capital, Owner's Drawings, Utilities Expense, Rent Expense, Merchandise Inventory, Cost of Goods Sold.",
      "subject": "FABM1",
      "title": "Set 12: Perpetual Inventory (FIFO)",
      "topic": "Journalizing - Merchandising Business Transactions",
      "transactions": [
        { "date": "Dec 1", "description": "Owner invested ₱45,000 cash.", "rows": 3, "solution": [ { "account": "Cash", "debit": 45000 }, { "account": "Owner's Capital", "credit": 45000 }, { "account": "Investment.", "isExplanation": true } ] },
        { "date": "Dec 2", "description": "Purchased 450 units @ ₱20.", "rows": 3, "solution": [ { "account": "Merchandise Inventory", "debit": 9000 }, { "account": "Accounts Payable", "credit": 9000 }, { "account": "Purchase.", "isExplanation": true } ] },
        { "date": "Dec 3", "description": "Paid freight in ₱250.", "rows": 3, "solution": [ { "account": "Merchandise Inventory", "debit": 250 }, { "account": "Cash", "credit": 250 }, { "account": "Freight.", "isExplanation": true } ] },
        { "date": "Dec 5", "description": "Sold 100 units @ ₱45.", "rows": 5, "solution": [ { "account": "Accounts Receivable", "debit": 4500 }, { "account": "Sales", "credit": 4500 }, { "account": "Cost of Goods Sold", "debit": 2055.56 }, { "account": "Merchandise Inventory", "credit": 2055.56 }, { "account": "Sale.", "isExplanation": true } ] },
        { "date": "Dec 7", "description": "Returned 20 units to supplier.", "rows": 3, "solution": [ { "account": "Accounts Payable", "debit": 400 }, { "account": "Merchandise Inventory", "credit": 400 }, { "account": "Return.", "isExplanation": true } ] },
        { "date": "Dec 9", "description": "Customer returned 6.66 units (approx ₱300).", "rows": 5, "solution": [ { "account": "Sales Returns and Allowances", "debit": 300 }, { "account": "Accounts Receivable", "credit": 300 }, { "account": "Merchandise Inventory", "debit": 136.9 }, { "account": "Cost of Goods Sold", "credit": 136.9 }, { "account": "Return.", "isExplanation": true } ] },
        { "date": "Dec 12", "description": "Paid supplier in full (no discount terms).", "rows": 3, "solution": [ { "account": "Accounts Payable", "debit": 8600 }, { "account": "Cash", "credit": 8600 }, { "account": "Payment.", "isExplanation": true } ] },
        { "date": "Dec 15", "description": "Collected from customer within discount.", "rows": 3, "solution": [ { "account": "Cash", "debit": 4116 }, { "account": "Sales Discounts", "debit": 84 }, { "account": "Accounts Receivable", "credit": 4200 }, { "account": "Collection.", "isExplanation": true } ] },
        { "date": "Dec 18", "description": "Purchased 175 units @ ₱20.", "rows": 3, "solution": [ { "account": "Merchandise Inventory", "debit": 3500 }, { "account": "Cash", "credit": 3500 }, { "account": "Purchase.", "isExplanation": true } ] },
        { "date": "Dec 20", "description": "Sold 55 units @ ₱45.", "rows": 5, "solution": [ { "account": "Cash", "debit": 2500 }, { "account": "Sales", "credit": 2500 }, { "account": "Cost of Goods Sold", "debit": 1130.56 }, { "account": "Merchandise Inventory", "credit": 1130.56 }, { "account": "Sale.", "isExplanation": true } ] },
        { "date": "Dec 22", "description": "Owner withdrew ₱800.", "rows": 3, "solution": [ { "account": "Owner's Drawings", "debit": 800 }, { "account": "Cash", "credit": 800 }, { "account": "Withdrawal.", "isExplanation": true } ] },
        { "date": "Dec 25", "description": "Paid utilities ₱450.", "rows": 3, "solution": [ { "account": "Utilities Expense", "debit": 450 }, { "account": "Cash", "credit": 450 }, { "account": "Utilities.", "isExplanation": true } ] },
        { "date": "Dec 28", "description": "Paid rent ₱1,000.", "rows": 3, "solution": [ { "account": "Rent Expense", "debit": 1000 }, { "account": "Cash", "credit": 1000 }, { "account": "Rent.", "isExplanation": true } ] },
        { "date": "Dec 30", "description": "Purchased 100 units @ ₱20.", "rows": 3, "solution": [ { "account": "Merchandise Inventory", "debit": 2000 }, { "account": "Accounts Payable", "credit": 2000 }, { "account": "Purchase.", "isExplanation": true } ] },
        { "date": "Dec 31", "description": "Shrinkage check (Perpetual - Adjust).", "rows": 3, "solution": [ { "account": "Cost of Goods Sold", "debit": 50 }, { "account": "Merchandise Inventory", "credit": 50 }, { "account": "Shrinkage.", "isExplanation": true } ] }
      ],
      "type": "Journalizing"
    }
  },
  {
    "FABM1-Merch-Perpe-FIFO-013": {
      "id": "set13_perpetual_fifo",
      "instructions": "Journalize the transactions using Perpetual Inventory System and FIFO Costing. Use the following accounts: Cash, Accounts Receivable, Purchases, Purchase Returns and Allowances, Purchase Discounts, Freight In, Sales, Sales Returns and Allowances, Sales Discounts, Accounts Payable, Owner's Capital, Owner's Drawings, Salaries Expense, Utilities Expense, Supplies, Merchandise Inventory, Cost of Goods Sold.",
      "subject": "FABM1",
      "title": "Set 13: Perpetual Inventory (FIFO)",
      "topic": "Journalizing - Merchandising Business Transactions",
      "transactions": [
        { "date": "Jan 1", "description": "Owner invested ₱35,000 cash.", "rows": 3, "solution": [ { "account": "Cash", "debit": 35000 }, { "account": "Owner's Capital", "credit": 35000 }, { "account": "Investment.", "isExplanation": true } ] },
        { "date": "Jan 2", "description": "Purchased 300 units @ ₱20.", "rows": 3, "solution": [ { "account": "Merchandise Inventory", "debit": 6000 }, { "account": "Accounts Payable", "credit": 6000 }, { "account": "Purchase.", "isExplanation": true } ] },
        { "date": "Jan 3", "description": "Paid freight in ₱120.", "rows": 3, "solution": [ { "account": "Merchandise Inventory", "debit": 120 }, { "account": "Cash", "credit": 120 }, { "account": "Freight.", "isExplanation": true } ] },
        { "date": "Jan 5", "description": "Returned 15 units (₱20 credit).", "rows": 3, "solution": [ { "account": "Accounts Payable", "debit": 300 }, { "account": "Merchandise Inventory", "credit": 300 }, { "account": "Return.", "isExplanation": true } ] },
        { "date": "Jan 8", "description": "Sold 100 units @ ₱40.", "rows": 5, "solution": [ { "account": "Accounts Receivable", "debit": 4000 }, { "account": "Sales", "credit": 4000 }, { "account": "Cost of Goods Sold", "debit": 2040 }, { "account": "Merchandise Inventory", "credit": 2040 }, { "account": "Sale.", "isExplanation": true } ] },
        { "date": "Jan 10", "description": "Paid supplier in full (with discount).", "rows": 3, "solution": [ { "account": "Accounts Payable", "debit": 5700 }, { "account": "Merchandise Inventory", "credit": 57 }, { "account": "Cash", "credit": 5643 }, { "account": "Payment.", "isExplanation": true } ] },
        { "date": "Jan 12", "description": "Customer returned 5 units.", "rows": 5, "solution": [ { "account": "Sales Returns and Allowances", "debit": 200 }, { "account": "Accounts Receivable", "credit": 200 }, { "account": "Merchandise Inventory", "debit": 102 }, { "account": "Cost of Goods Sold", "credit": 102 }, { "account": "Return.", "isExplanation": true } ] },
        { "date": "Jan 15", "description": "Collected from customer in full.", "rows": 3, "solution": [ { "account": "Cash", "debit": 3800 }, { "account": "Accounts Receivable", "credit": 3800 }, { "account": "Collection.", "isExplanation": true } ] },
        { "date": "Jan 18", "description": "Purchased supplies ₱300 cash.", "rows": 3, "solution": [ { "account": "Supplies", "debit": 300 }, { "account": "Cash", "credit": 300 }, { "account": "Supplies.", "isExplanation": true } ] },
        { "date": "Jan 20", "description": "Sold 45 units @ ₱40.", "rows": 5, "solution": [ { "account": "Cash", "debit": 1800 }, { "account": "Sales", "credit": 1800 }, { "account": "Cost of Goods Sold", "debit": 918 }, { "account": "Merchandise Inventory", "credit": 918 }, { "account": "Sale.", "isExplanation": true } ] },
        { "date": "Jan 22", "description": "Purchased 100 units @ ₱20.", "rows": 3, "solution": [ { "account": "Merchandise Inventory", "debit": 2000 }, { "account": "Cash", "credit": 2000 }, { "account": "Purchase.", "isExplanation": true } ] },
        { "date": "Jan 25", "description": "Paid Salaries ₱1,000.", "rows": 3, "solution": [ { "account": "Salaries Expense", "debit": 1000 }, { "account": "Cash", "credit": 1000 }, { "account": "Salaries.", "isExplanation": true } ] },
        { "date": "Jan 28", "description": "Owner withdrew ₱600.", "rows": 3, "solution": [ { "account": "Owner's Drawings", "debit": 600 }, { "account": "Cash", "credit": 600 }, { "account": "Withdrawal.", "isExplanation": true } ] },
        { "date": "Jan 30", "description": "Paid utilities ₱350.", "rows": 3, "solution": [ { "account": "Utilities Expense", "debit": 350 }, { "account": "Cash", "credit": 350 }, { "account": "Utilities.", "isExplanation": true } ] },
        { "date": "Jan 31", "description": "Sold 30 units @ ₱40.", "rows": 5, "solution": [ { "account": "Accounts Receivable", "debit": 1200 }, { "account": "Sales", "credit": 1200 }, { "account": "Cost of Goods Sold", "debit": 612 }, { "account": "Merchandise Inventory", "credit": 612 }, { "account": "Sale.", "isExplanation": true } ] }
      ],
      "type": "Journalizing"
    }
  },
  {
    "FABM1-Merch-Perpe-FIFO-014": {
      "id": "set14_perpetual_fifo",
      "instructions": "Journalize the transactions using Perpetual Inventory System and FIFO Costing. Use the following accounts: Cash, Accounts Receivable, Purchases, Purchase Returns and Allowances, Purchase Discounts, Freight In, Sales, Sales Returns and Allowances, Sales Discounts, Accounts Payable, Owner's Capital, Owner's Drawings, Advertising Expense, Rent Expense, Merchandise Inventory, Cost of Goods Sold.",
      "subject": "FABM1",
      "title": "Set 14: Perpetual Inventory (FIFO)",
      "topic": "Journalizing - Merchandising Business Transactions",
      "transactions": [
        { "date": "Feb 1", "description": "Owner invested ₱55,000 cash.", "rows": 3, "solution": [ { "account": "Cash", "debit": 55000 }, { "account": "Owner's Capital", "credit": 55000 }, { "account": "Investment.", "isExplanation": true } ] },
        { "date": "Feb 2", "description": "Purchased 450 units @ ₱20.", "rows": 3, "solution": [ { "account": "Merchandise Inventory", "debit": 9000 }, { "account": "Accounts Payable", "credit": 9000 }, { "account": "Purchase.", "isExplanation": true } ] },
        { "date": "Feb 3", "description": "Paid freight in ₱180.", "rows": 3, "solution": [ { "account": "Merchandise Inventory", "debit": 180 }, { "account": "Cash", "credit": 180 }, { "account": "Freight.", "isExplanation": true } ] },
        { "date": "Feb 5", "description": "Returned 22.5 units (₱450 credit).", "rows": 3, "solution": [ { "account": "Accounts Payable", "debit": 450 }, { "account": "Merchandise Inventory", "credit": 450 }, { "account": "Return.", "isExplanation": true } ] },
        { "date": "Feb 8", "description": "Sold 110 units @ ₱50.", "rows": 5, "solution": [ { "account": "Accounts Receivable", "debit": 5500 }, { "account": "Sales", "credit": 5500 }, { "account": "Cost of Goods Sold", "debit": 2244 }, { "account": "Merchandise Inventory", "credit": 2244 }, { "account": "Sale.", "isExplanation": true } ] },
        { "date": "Feb 10", "description": "Paid supplier in full.", "rows": 3, "solution": [ { "account": "Accounts Payable", "debit": 8550 }, { "account": "Cash", "credit": 8550 }, { "account": "Payment.", "isExplanation": true } ] },
        { "date": "Feb 12", "description": "Customer returned 5 units.", "rows": 5, "solution": [ { "account": "Sales Returns and Allowances", "debit": 250 }, { "account": "Accounts Receivable", "credit": 250 }, { "account": "Merchandise Inventory", "debit": 102.12 }, { "account": "Cost of Goods Sold", "credit": 102.12 }, { "account": "Return.", "isExplanation": true } ] },
        { "date": "Feb 15", "description": "Collected from customer (with discount).", "rows": 3, "solution": [ { "account": "Cash", "debit": 5145 }, { "account": "Sales Discounts", "debit": 105 }, { "account": "Accounts Receivable", "credit": 5250 }, { "account": "Collection.", "isExplanation": true } ] },
        { "date": "Feb 18", "description": "Purchased 175 units @ ₱20.", "rows": 3, "solution": [ { "account": "Merchandise Inventory", "debit": 3500 }, { "account": "Cash", "credit": 3500 }, { "account": "Purchase.", "isExplanation": true } ] },
        { "date": "Feb 20", "description": "Sold 56 units @ ₱50.", "rows": 5, "solution": [ { "account": "Cash", "debit": 2800 }, { "account": "Sales", "credit": 2800 }, { "account": "Cost of Goods Sold", "debit": 1142.4 }, { "account": "Merchandise Inventory", "credit": 1142.4 }, { "account": "Sale.", "isExplanation": true } ] },
        { "date": "Feb 22", "description": "Paid Advertising ₱400.", "rows": 3, "solution": [ { "account": "Advertising Expense", "debit": 400 }, { "account": "Cash", "credit": 400 }, { "account": "Advertising.", "isExplanation": true } ] },
        { "date": "Feb 25", "description": "Owner withdrew ₱900.", "rows": 3, "solution": [ { "account": "Owner's Drawings", "debit": 900 }, { "account": "Cash", "credit": 900 }, { "account": "Withdrawal.", "isExplanation": true } ] },
        { "date": "Feb 28", "description": "Paid Rent ₱1,100.", "rows": 3, "solution": [ { "account": "Rent Expense", "debit": 1100 }, { "account": "Cash", "credit": 1100 }, { "account": "Rent.", "isExplanation": true } ] },
        { "date": "Feb 28", "description": "Sold 36 units @ ₱50.", "rows": 5, "solution": [ { "account": "Accounts Receivable", "debit": 1800 }, { "account": "Sales", "credit": 1800 }, { "account": "Cost of Goods Sold", "debit": 734.4 }, { "account": "Merchandise Inventory", "credit": 734.4 }, { "account": "Sale.", "isExplanation": true } ] },
        { "date": "Feb 28", "description": "Shrinkage adjustment (Perpetual - Adjust).", "rows": 3, "solution": [ { "account": "Cost of Goods Sold", "debit": 50 }, { "account": "Merchandise Inventory", "credit": 50 }, { "account": "Shrinkage.", "isExplanation": true } ] }
      ],
      "type": "Journalizing"
    }
  },
  {
    "FABM1-Merch-Perpe-FIFO-015": {
      "id": "set15_perpetual_fifo",
      "instructions": "Journalize the transactions using Perpetual Inventory System and FIFO Costing. Use the following accounts: Cash, Accounts Receivable, Purchases, Purchase Returns and Allowances, Purchase Discounts, Freight In, Freight Out, Sales, Sales Returns and Allowances, Sales Discounts, Accounts Payable, Owner's Capital, Owner's Drawings, Salaries Expense, Utilities Expense, Merchandise Inventory, Cost of Goods Sold.",
      "subject": "FABM1",
      "title": "Set 15: Perpetual Inventory (FIFO)",
      "topic": "Journalizing - Merchandising Business Transactions",
      "transactions": [
        { "date": "Mar 1", "description": "Owner invested ₱28,000 cash.", "rows": 3, "solution": [ { "account": "Cash", "debit": 28000 }, { "account": "Owner's Capital", "credit": 28000 }, { "account": "Investment.", "isExplanation": true } ] },
        { "date": "Mar 2", "description": "Purchased 325 units @ ₱20.", "rows": 3, "solution": [ { "account": "Merchandise Inventory", "debit": 6500 }, { "account": "Accounts Payable", "credit": 6500 }, { "account": "Purchase.", "isExplanation": true } ] },
        { "date": "Mar 3", "description": "Paid freight in ₱130.", "rows": 3, "solution": [ { "account": "Merchandise Inventory", "debit": 130 }, { "account": "Cash", "credit": 130 }, { "account": "Freight.", "isExplanation": true } ] },
        { "date": "Mar 5", "description": "Returned 17.5 units (₱350 credit).", "rows": 3, "solution": [ { "account": "Accounts Payable", "debit": 350 }, { "account": "Merchandise Inventory", "credit": 350 }, { "account": "Return.", "isExplanation": true } ] },
        { "date": "Mar 8", "description": "Sold 100 units @ ₱42.", "rows": 5, "solution": [ { "account": "Accounts Receivable", "debit": 4200 }, { "account": "Sales", "credit": 4200 }, { "account": "Cost of Goods Sold", "debit": 2040 }, { "account": "Merchandise Inventory", "credit": 2040 }, { "account": "Sale.", "isExplanation": true } ] },
        { "date": "Mar 9", "description": "Paid freight out ₱80.", "rows": 3, "solution": [ { "account": "Freight Out", "debit": 80 }, { "account": "Cash", "credit": 80 }, { "account": "Delivery.", "isExplanation": true } ] },
        { "date": "Mar 11", "description": "Paid supplier in full (with discount).", "rows": 3, "solution": [ { "account": "Accounts Payable", "debit": 6150 }, { "account": "Merchandise Inventory", "credit": 61.5 }, { "account": "Cash", "credit": 6088.5 }, { "account": "Payment.", "isExplanation": true } ] },
        { "date": "Mar 14", "description": "Customer returned 3.57 units (approx ₱150 sales).", "rows": 5, "solution": [ { "account": "Sales Returns and Allowances", "debit": 150 }, { "account": "Accounts Receivable", "credit": 150 }, { "account": "Merchandise Inventory", "debit": 72.85 }, { "account": "Cost of Goods Sold", "credit": 72.85 }, { "account": "Return.", "isExplanation": true } ] },
        { "date": "Mar 16", "description": "Collected from customer in full.", "rows": 3, "solution": [ { "account": "Cash", "debit": 4050 }, { "account": "Accounts Receivable", "credit": 4050 }, { "account": "Collection.", "isExplanation": true } ] },
        { "date": "Mar 18", "description": "Purchased 90 units @ ₱20.", "rows": 3, "solution": [ { "account": "Merchandise Inventory", "debit": 1800 }, { "account": "Cash", "credit": 1800 }, { "account": "Purchase.", "isExplanation": true } ] },
        { "date": "Mar 20", "description": "Sold 52 units @ ₱42.", "rows": 5, "solution": [ { "account": "Cash", "debit": 2200 }, { "account": "Sales", "credit": 2200 }, { "account": "Cost of Goods Sold", "debit": 1060.8 }, { "account": "Merchandise Inventory", "credit": 1060.8 }, { "account": "Sale.", "isExplanation": true } ] },
        { "date": "Mar 22", "description": "Owner withdrew ₱700.", "rows": 3, "solution": [ { "account": "Owner's Drawings", "debit": 700 }, { "account": "Cash", "credit": 700 }, { "account": "Withdrawal.", "isExplanation": true } ] },
        { "date": "Mar 25", "description": "Paid Salaries ₱1,300.", "rows": 3, "solution": [ { "account": "Salaries Expense", "debit": 1300 }, { "account": "Cash", "credit": 1300 }, { "account": "Salaries.", "isExplanation": true } ] },
        { "date": "Mar 28", "description": "Paid Utilities ₱400.", "rows": 3, "solution": [ { "account": "Utilities Expense", "debit": 400 }, { "account": "Cash", "credit": 400 }, { "account": "Utilities.", "isExplanation": true } ] },
        { "date": "Mar 30", "description": "Purchased 125 units @ ₱20.", "rows": 3, "solution": [ { "account": "Merchandise Inventory", "debit": 2500 }, { "account": "Accounts Payable", "credit": 2500 }, { "account": "Purchase.", "isExplanation": true } ] }
      ],
      "type": "Journalizing"
    }
  },
  {
    "FABM1-Merch-Perpe-MovingAvg-001": {
      "id": "set1_perpetual_average_comprehensive",
      "instructions": "Journalize the transactions using Perpetual Inventory System and Moving Average Costing. Use the following accounts: Accounts Payable, Accounts Receivable, Cash, Cost of Goods Sold, Merchandise Inventory, Sales, Sales Returns and Allowances, Sales Discounts, Freight Out, Utilities Expense, Owner's Capital, Owner's Drawings, Rent Expense, Salaries Expense, Supplies.",
      "subject": "FABM1",
      "title": "Set 1: Moving Average Costing (Perpetual)",
      "topic": "Journalizing - Merchandising Business Transactions",
      "transactions": [
        { "date": "Dec 1", "description": "Owner invested ₱100,000 cash.", "rows": 3, "solution": [ { "account": "Cash", "debit": 100000 }, { "account": "Owner's Capital", "credit": 100000 }, { "account": "Initial investment.", "isExplanation": true } ] },
        { "date": "Dec 2", "description": "Purchased 2,000 units at ₱20 each on account, terms 2/10, n/30.", "rows": 3, "solution": [ { "account": "Merchandise Inventory", "debit": 40000 }, { "account": "Accounts Payable", "credit": 40000 }, { "account": "2000 units @ 20. Avg 20.", "isExplanation": true } ] },
        { "date": "Dec 3", "description": "Paid freight in ₱1,000 cash.", "rows": 3, "solution": [ { "account": "Merchandise Inventory", "debit": 1000 }, { "account": "Cash", "credit": 1000 }, { "account": "Tot: 41000 / 2000 units = 20.50 Avg.", "isExplanation": true } ] },
        { "date": "Dec 5", "description": "Returned 200 defective units to supplier (Credit at cost 20/unit, ignores freight).", "rows": 3, "solution": [ { "account": "Accounts Payable", "debit": 4000 }, { "account": "Merchandise Inventory", "credit": 4000 }, { "account": "Bal: 37000 / 1800 units = 20.56 Avg.", "isExplanation": true } ] },
        { "date": "Dec 7", "description": "Purchased 1,000 units at ₱25 each on account.", "rows": 3, "solution": [ { "account": "Merchandise Inventory", "debit": 25000 }, { "account": "Accounts Payable", "credit": 25000 }, { "account": "Bal: 37k + 25k = 62000. Units 2800. Avg 22.14.", "isExplanation": true } ] },
        { "date": "Dec 10", "description": "Sold 1,500 units on account @ ₱50 each, terms 1/10, n/30.", "rows": 5, "solution": [ { "account": "Accounts Receivable", "debit": 75000 }, { "account": "Sales", "credit": 75000 }, { "account": "Cost of Goods Sold", "debit": 33210 }, { "account": "Merchandise Inventory", "credit": 33210 }, { "account": "COGS: 1500 * 22.14 = 33210.", "isExplanation": true } ] },
        { "date": "Dec 11", "description": "Paid balance for Dec 2 purchase within discount period. (36000 bal. 2% disc).", "rows": 3, "solution": [ { "account": "Accounts Payable", "debit": 36000 }, { "account": "Merchandise Inventory", "credit": 720 }, { "account": "Cash", "credit": 35280 }, { "account": "Disc reduces inventory cost.", "isExplanation": true } ] },
        { "date": "Dec 12", "description": "Customer returned 100 units from Dec 10 sale. (Good condition).", "rows": 5, "solution": [ { "account": "Sales Returns and Allowances", "debit": 5000 }, { "account": "Accounts Receivable", "credit": 5000 }, { "account": "Merchandise Inventory", "debit": 2214 }, { "account": "Cost of Goods Sold", "credit": 2214 }, { "account": "Return to Inv @ 22.14.", "isExplanation": true } ] },
        { "date": "Dec 14", "description": "Paid freight out ₱500 cash.", "rows": 3, "solution": [ { "account": "Freight Out", "debit": 500 }, { "account": "Cash", "credit": 500 }, { "account": "Delivery expense.", "isExplanation": true } ] },
        { "date": "Dec 19", "description": "Received payment from Dec 10 customer within discount. (70000 bal. 1% disc).", "rows": 3, "solution": [ { "account": "Cash", "debit": 69300 }, { "account": "Sales Discounts", "debit": 700 }, { "account": "Accounts Receivable", "credit": 70000 }, { "account": "Collection.", "isExplanation": true } ] },
        { "date": "Dec 20", "description": "Purchased supplies ₱500 cash.", "rows": 3, "solution": [ { "account": "Supplies", "debit": 500 }, { "account": "Cash", "credit": 500 }, { "account": "Supplies.", "isExplanation": true } ] },
        { "date": "Dec 25", "description": "Owner withdrew ₱2,000 cash.", "rows": 3, "solution": [ { "account": "Owner's Drawings", "debit": 2000 }, { "account": "Cash", "credit": 2000 }, { "account": "Withdrawal.", "isExplanation": true } ] },
        { "date": "Dec 28", "description": "Paid rent ₱1,500.", "rows": 3, "solution": [ { "account": "Rent Expense", "debit": 1500 }, { "account": "Cash", "credit": 1500 }, { "account": "Rent.", "isExplanation": true } ] },
        { "date": "Dec 30", "description": "Paid salaries ₱2,000.", "rows": 3, "solution": [ { "account": "Salaries Expense", "debit": 2000 }, { "account": "Cash", "credit": 2000 }, { "account": "Salaries.", "isExplanation": true } ] },
        { "date": "Dec 31", "description": "Accrued utilities ₱300.", "rows": 3, "solution": [ { "account": "Utilities Expense", "debit": 300 }, { "account": "Accounts Payable", "credit": 300 }, { "account": "Accrual.", "isExplanation": true } ] }
      ],
      "type": "Journalizing"
    }
  },
  {
    "FABM1-Merch-Perpe-MovingAvg-002": {
      "id": "set2_perpetual_average",
      "instructions": "Journalize the transactions using Perpetual Inventory System and Moving Average Costing. Use the following accounts: Accounts Payable, Accounts Receivable, Cash, Cost of Goods Sold, Merchandise Inventory, Sales, Sales Returns and Allowances, Sales Discounts, Freight Out, Utilities Expense, Owner's Capital, Owner's Drawings.",
      "subject": "FABM1",
      "title": "Set 2: Moving Average Costing",
      "topic": "Journalizing - Merchandising Business Transactions",
      "transactions": [
        { "date": "Feb 1", "description": "Owner invested ₱20,000 cash.", "rows": 3, "solution": [ { "account": "Cash", "debit": 20000 }, { "account": "Owner's Capital", "credit": 20000 }, { "account": "Investment.", "isExplanation": true } ] },
        { "date": "Feb 2", "description": "Purchased 200 units @ ₱50 each, terms 2/10, n/30.", "rows": 3, "solution": [ { "account": "Merchandise Inventory", "debit": 10000 }, { "account": "Accounts Payable", "credit": 10000 }, { "account": "200 units @ ₱50. Avg ₱50.", "isExplanation": true } ] },
        { "date": "Feb 3", "description": "Paid freight in ₱200 cash.", "rows": 3, "solution": [ { "account": "Merchandise Inventory", "debit": 200 }, { "account": "Cash", "credit": 200 }, { "account": "Tot: ₱10200. Units: 200. New Avg: ₱51.", "isExplanation": true } ] },
        { "date": "Feb 5", "description": "Sold 100 units @ ₱80 on account, terms 1/10, n/30.", "rows": 5, "solution": [ { "account": "Accounts Receivable", "debit": 8000 }, { "account": "Sales", "credit": 8000 }, { "account": "Cost of Goods Sold", "debit": 5100 }, { "account": "Merchandise Inventory", "credit": 5100 }, { "account": "COGS: 100 * ₱51 = 5100.", "isExplanation": true } ] },
        { "date": "Feb 7", "description": "Returned 10 defective units to supplier from Feb 2 purchase.", "rows": 3, "solution": [ { "account": "Accounts Payable", "debit": 500 }, { "account": "Merchandise Inventory", "credit": 500 }, { "account": "Inventory reduced.", "isExplanation": true } ] },
        { "date": "Feb 9", "description": "Purchased 100 units @ ₱54 each.", "rows": 3, "solution": [ { "account": "Merchandise Inventory", "debit": 5400 }, { "account": "Accounts Payable", "credit": 5400 }, { "account": "Update Avg Cost.", "isExplanation": true } ] },
        { "date": "Feb 11", "description": "Paid supplier for Feb 2 purchase balance, within discount period.", "rows": 3, "solution": [ { "account": "Accounts Payable", "debit": 9500 }, { "account": "Merchandise Inventory", "credit": 190 }, { "account": "Cash", "credit": 9310 }, { "account": "Payment with discount.", "isExplanation": true } ] },
        { "date": "Feb 14", "description": "Customer from Feb 5 returned 10 units. (Restock at original cost ₱51).", "rows": 5, "solution": [ { "account": "Sales Returns and Allowances", "debit": 800 }, { "account": "Accounts Receivable", "credit": 800 }, { "account": "Merchandise Inventory", "debit": 510 }, { "account": "Cost of Goods Sold", "credit": 510 }, { "account": "Return.", "isExplanation": true } ] },
        { "date": "Feb 15", "description": "Collected from Feb 5 customer within discount period.", "rows": 3, "solution": [ { "account": "Cash", "debit": 7128 }, { "account": "Sales Discounts", "debit": 72 }, { "account": "Accounts Receivable", "credit": 7200 }, { "account": "Collection.", "isExplanation": true } ] },
        { "date": "Feb 18", "description": "Sold 50 units for cash ₱85 each.", "rows": 5, "solution": [ { "account": "Cash", "debit": 4250 }, { "account": "Sales", "credit": 4250 }, { "account": "Cost of Goods Sold", "debit": 2650 }, { "account": "Merchandise Inventory", "credit": 2650 }, { "account": "Use current moving avg.", "isExplanation": true } ] },
        { "date": "Feb 20", "description": "Paid freight out ₱100.", "rows": 3, "solution": [ { "account": "Freight Out", "debit": 100 }, { "account": "Cash", "credit": 100 }, { "account": "Delivery expense.", "isExplanation": true } ] },
        { "date": "Feb 22", "description": "Purchased 50 units @ ₱56.", "rows": 3, "solution": [ { "account": "Merchandise Inventory", "debit": 2800 }, { "account": "Accounts Payable", "credit": 2800 }, { "account": "Purchase.", "isExplanation": true } ] },
        { "date": "Feb 25", "description": "Owner withdrew ₱1,000 cash.", "rows": 3, "solution": [ { "account": "Owner's Drawings", "debit": 1000 }, { "account": "Cash", "credit": 1000 }, { "account": "Withdrawal.", "isExplanation": true } ] },
        { "date": "Feb 27", "description": "Paid utilities ₱400.", "rows": 3, "solution": [ { "account": "Utilities Expense", "debit": 400 }, { "account": "Cash", "credit": 400 }, { "account": "Expense.", "isExplanation": true } ] },
        { "date": "Feb 28", "description": "Inventory shrinkage adjustment ₱50.", "rows": 3, "solution": [ { "account": "Cost of Goods Sold", "debit": 50 }, { "account": "Merchandise Inventory", "credit": 50 }, { "account": "Shrinkage.", "isExplanation": true } ] }
      ],
      "type": "Journalizing"
    }
  },
  {
    "FABM1-Merch-Perpe-MovingAvg-003": {
      "id": "set3_perpetual_average",
      "instructions": "Journalize the transactions using Perpetual Inventory System and Moving Average Costing. Use the following accounts: Accounts Payable, Accounts Receivable, Cash, Cost of Goods Sold, Merchandise Inventory, Sales, Sales Returns and Allowances, Sales Discounts, Freight Out, Rent Expense, Owner's Capital, Owner's Drawings.",
      "subject": "FABM1",
      "title": "Set 3: Moving Average Costing",
      "topic": "Journalizing - Merchandising Business Transactions",
      "transactions": [
        { "date": "Mar 1", "description": "Owner invested ₱30,000 cash.", "rows": 3, "solution": [ { "account": "Cash", "debit": 30000 }, { "account": "Owner's Capital", "credit": 30000 }, { "account": "Investment.", "isExplanation": true } ] },
        { "date": "Mar 2", "description": "Purchased 500 units @ ₱20 each, trade discount 5%, terms n/30.", "rows": 3, "solution": [ { "account": "Merchandise Inventory", "debit": 9500 }, { "account": "Accounts Payable", "credit": 9500 }, { "account": "Net price ₱19/unit.", "isExplanation": true } ] },
        { "date": "Mar 3", "description": "Paid freight in ₱500.", "rows": 3, "solution": [ { "account": "Merchandise Inventory", "debit": 500 }, { "account": "Cash", "credit": 500 }, { "account": "Total Cost ₱10000. Avg ₱20.", "isExplanation": true } ] },
        { "date": "Mar 5", "description": "Sold 300 units @ ₱40.", "rows": 5, "solution": [ { "account": "Accounts Receivable", "debit": 12000 }, { "account": "Sales", "credit": 12000 }, { "account": "Cost of Goods Sold", "debit": 6000 }, { "account": "Merchandise Inventory", "credit": 6000 }, { "account": "COGS: 300 * 20 = 6000.", "isExplanation": true } ] },
        { "date": "Mar 7", "description": "Purchased 200 units @ ₱25.", "rows": 3, "solution": [ { "account": "Merchandise Inventory", "debit": 5000 }, { "account": "Accounts Payable", "credit": 5000 }, { "account": "Bal: 200@20 + 200@25. Avg ₱22.50.", "isExplanation": true } ] },
        { "date": "Mar 10", "description": "Returned 20 units to supplier from Mar 7 purchase.", "rows": 3, "solution": [ { "account": "Accounts Payable", "debit": 500 }, { "account": "Merchandise Inventory", "credit": 500 }, { "account": "Return reduces inventory.", "isExplanation": true } ] },
        { "date": "Mar 12", "description": "Sold 150 units @ ₱45, terms 2/10, n/30.", "rows": 5, "solution": [ { "account": "Accounts Receivable", "debit": 6750 }, { "account": "Sales", "credit": 6750 }, { "account": "Cost of Goods Sold", "debit": 3375 }, { "account": "Merchandise Inventory", "credit": 3375 }, { "account": "COGS: 150 * 22.50 = 3375.", "isExplanation": true } ] },
        { "date": "Mar 14", "description": "Paid freight out ₱150.", "rows": 3, "solution": [ { "account": "Freight Out", "debit": 150 }, { "account": "Cash", "credit": 150 }, { "account": "Expense.", "isExplanation": true } ] },
        { "date": "Mar 16", "description": "Customer returned 5 units from Mar 12 sale. (Good condition).", "rows": 5, "solution": [ { "account": "Sales Returns and Allowances", "debit": 225 }, { "account": "Accounts Receivable", "credit": 225 }, { "account": "Merchandise Inventory", "debit": 112.5 }, { "account": "Cost of Goods Sold", "credit": 112.5 }, { "account": "Return.", "isExplanation": true } ] },
        { "date": "Mar 20", "description": "Received payment from Mar 12 customer within discount.", "rows": 3, "solution": [ { "account": "Cash", "debit": 6394.5 }, { "account": "Sales Discounts", "debit": 130.5 }, { "account": "Accounts Receivable", "credit": 6525 }, { "account": "Collection.", "isExplanation": true } ] },
        { "date": "Mar 22", "description": "Paid supplier for Mar 2 purchase.", "rows": 3, "solution": [ { "account": "Accounts Payable", "debit": 9500 }, { "account": "Cash", "credit": 9500 }, { "account": "Payment.", "isExplanation": true } ] },
        { "date": "Mar 25", "description": "Purchased 100 units @ ₱30 cash.", "rows": 3, "solution": [ { "account": "Merchandise Inventory", "debit": 3000 }, { "account": "Cash", "credit": 3000 }, { "account": "Purchase.", "isExplanation": true } ] },
        { "date": "Mar 28", "description": "Paid rent ₱1,200.", "rows": 3, "solution": [ { "account": "Rent Expense", "debit": 1200 }, { "account": "Cash", "credit": 1200 }, { "account": "Expense.", "isExplanation": true } ] },
        { "date": "Mar 30", "description": "Sold 50 units for cash ₱60.", "rows": 5, "solution": [ { "account": "Cash", "debit": 3000 }, { "account": "Sales", "credit": 3000 }, { "account": "Cost of Goods Sold", "debit": 1250 }, { "account": "Merchandise Inventory", "credit": 1250 }, { "account": "Use current average.", "isExplanation": true } ] },
        { "date": "Mar 31", "description": "Owner withdrew ₱500.", "rows": 3, "solution": [ { "account": "Owner's Drawings", "debit": 500 }, { "account": "Cash", "credit": 500 }, { "account": "Withdrawal.", "isExplanation": true } ] }
      ],
      "type": "Journalizing"
    }
  },
{
    "FABM1-Merch-Perpe-MovingAvg-004": {
      "id": "set4_perpetual_average",
      "instructions": "Journalize the transactions using Perpetual Inventory System and Moving Average Costing. Use the following accounts: Accounts Payable, Accounts Receivable, Cash, Cost of Goods Sold, Merchandise Inventory, Sales, Sales Returns and Allowances, Sales Discounts, Freight Out, Advertising Expense, Owner's Capital, Owner's Drawings.",
      "subject": "FABM1",
      "title": "Set 4: Moving Average Costing",
      "topic": "Journalizing - Merchandising Business Transactions",
      "transactions": [
        { "date": "Apr 1", "description": "Owner invested ₱60,000 cash.", "rows": 3, "solution": [ { "account": "Cash", "debit": 60000 }, { "account": "Owner's Capital", "credit": 60000 }, { "account": "Investment.", "isExplanation": true } ] },
        { "date": "Apr 2", "description": "Purchased 400 units @ ₱10, terms 2/10, n/30.", "rows": 3, "solution": [ { "account": "Merchandise Inventory", "debit": 4000 }, { "account": "Accounts Payable", "credit": 4000 }, { "account": "400 units @ ₱10. Avg ₱10.", "isExplanation": true } ] },
        { "date": "Apr 3", "description": "Paid freight in ₱100.", "rows": 3, "solution": [ { "account": "Merchandise Inventory", "debit": 100 }, { "account": "Cash", "credit": 100 }, { "account": "Cost ₱4100. Avg ₱10.25.", "isExplanation": true } ] },
        { "date": "Apr 5", "description": "Returned 20 units to supplier (₱10 credit).", "rows": 3, "solution": [ { "account": "Accounts Payable", "debit": 200 }, { "account": "Merchandise Inventory", "credit": 200 }, { "account": "Reduce inventory.", "isExplanation": true } ] },
        { "date": "Apr 8", "description": "Sold 200 units @ ₱25.", "rows": 5, "solution": [ { "account": "Accounts Receivable", "debit": 5000 }, { "account": "Sales", "credit": 5000 }, { "account": "Cost of Goods Sold", "debit": 2052.63 }, { "account": "Merchandise Inventory", "credit": 2052.63 }, { "account": "COGS: 200 * ₱10.26.", "isExplanation": true } ] },
        { "date": "Apr 10", "description": "Paid freight out ₱50.", "rows": 3, "solution": [ { "account": "Freight Out", "debit": 50 }, { "account": "Cash", "credit": 50 }, { "account": "Expense.", "isExplanation": true } ] },
        { "date": "Apr 12", "description": "Paid supplier balance within discount period. (Bal 3800 * .98).", "rows": 3, "solution": [ { "account": "Accounts Payable", "debit": 3800 }, { "account": "Merchandise Inventory", "credit": 76 }, { "account": "Cash", "credit": 3724 }, { "account": "Disc reduces inv cost.", "isExplanation": true } ] },
        { "date": "Apr 15", "description": "Purchased 300 units @ ₱12.", "rows": 3, "solution": [ { "account": "Merchandise Inventory", "debit": 3600 }, { "account": "Accounts Payable", "credit": 3600 }, { "account": "Recalculate Avg.", "isExplanation": true } ] },
        { "date": "Apr 17", "description": "Sold 300 units @ ₱28.", "rows": 5, "solution": [ { "account": "Accounts Receivable", "debit": 8400 }, { "account": "Sales", "credit": 8400 }, { "account": "Cost of Goods Sold", "debit": 3390 }, { "account": "Merchandise Inventory", "credit": 3390 }, { "account": "Use current average.", "isExplanation": true } ] },
        { "date": "Apr 19", "description": "Customer returned 10 units from Apr 17 sale.", "rows": 5, "solution": [ { "account": "Sales Returns and Allowances", "debit": 280 }, { "account": "Accounts Receivable", "credit": 280 }, { "account": "Merchandise Inventory", "debit": 113 }, { "account": "Cost of Goods Sold", "credit": 113 }, { "account": "Return.", "isExplanation": true } ] },
        { "date": "Apr 21", "description": "Paid Advertising ₱200.", "rows": 3, "solution": [ { "account": "Advertising Expense", "debit": 200 }, { "account": "Cash", "credit": 200 }, { "account": "Expense.", "isExplanation": true } ] },
        { "date": "Apr 23", "description": "Collected from Apr 8 customer.", "rows": 3, "solution": [ { "account": "Cash", "debit": 5000 }, { "account": "Accounts Receivable", "credit": 5000 }, { "account": "Collection.", "isExplanation": true } ] },
        { "date": "Apr 26", "description": "Purchased 100 units @ ₱15.", "rows": 3, "solution": [ { "account": "Merchandise Inventory", "debit": 1500 }, { "account": "Accounts Payable", "credit": 1500 }, { "account": "Purchase.", "isExplanation": true } ] },
        { "date": "Apr 28", "description": "Paid supplier for Apr 15 purchase.", "rows": 3, "solution": [ { "account": "Accounts Payable", "debit": 3600 }, { "account": "Cash", "credit": 3600 }, { "account": "Paid account.", "isExplanation": true } ] },
        { "date": "Apr 30", "description": "Owner withdrew ₱1,500.", "rows": 3, "solution": [ { "account": "Owner's Drawings", "debit": 1500 }, { "account": "Cash", "credit": 1500 }, { "account": "Withdrawal.", "isExplanation": true } ] }
      ],
      "type": "Journalizing"
    }
  },
  {
    "FABM1-Merch-Perpe-MovingAvg-005": {
      "id": "set5_perpetual_average",
      "instructions": "Journalize the transactions using Perpetual Inventory System and Moving Average Costing. Use the following accounts: Accounts Payable, Accounts Receivable, Cash, Cost of Goods Sold, Merchandise Inventory, Sales, Sales Returns and Allowances, Sales Discounts, Freight Out, Supplies, Owner's Capital, Owner's Drawings, Salaries Expense.",
      "subject": "FABM1",
      "title": "Set 5: Moving Average Costing",
      "topic": "Journalizing - Merchandising Business Transactions",
      "transactions": [
        { "date": "May 1", "description": "Purchased 100 units at ₱10 each.", "rows": 3, "solution": [ { "account": "Merchandise Inventory", "debit": 1000 }, { "account": "Accounts Payable", "credit": 1000 }, { "account": "Bal: 100 units @ ₱10. Total ₱1000.", "isExplanation": true } ] },
        { "date": "May 3", "description": "Purchased 100 units at ₱12 each.", "rows": 3, "solution": [ { "account": "Merchandise Inventory", "debit": 1200 }, { "account": "Accounts Payable", "credit": 1200 }, { "account": "New Avg: (1000+1200)/200 = ₱11/unit.", "isExplanation": true } ] },
        { "date": "May 5", "description": "Sold 150 units for ₱20 each. (Use Moving Avg Cost)", "rows": 5, "solution": [ { "account": "Accounts Receivable", "debit": 3000 }, { "account": "Sales", "credit": 3000 }, { "account": "Cost of Goods Sold", "debit": 1650 }, { "account": "Merchandise Inventory", "credit": 1650 }, { "account": "COGS: 150 units * ₱11 avg = 1650.", "isExplanation": true } ] },
        { "date": "May 8", "description": "Returned 10 defective units from May 3 purchase (Supplier grants ₱12 credit).", "rows": 3, "solution": [ { "account": "Accounts Payable", "debit": 120 }, { "account": "Merchandise Inventory", "credit": 120 }, { "account": "Inv Bal: (50 units * 11) - 120 = 430 value / 40 units = ₱10.75 new avg.", "isExplanation": true } ] },
        { "date": "May 10", "description": "Purchased 60 units at ₱13.25 each.", "rows": 3, "solution": [ { "account": "Merchandise Inventory", "debit": 795 }, { "account": "Accounts Payable", "credit": 795 }, { "account": "New Bal: 430 + 795 = 1225. Units: 40+60=100. New Avg = ₱12.25.", "isExplanation": true } ] },
        { "date": "May 12", "description": "Paid freight ₱25 on May 10 purchase.", "rows": 3, "solution": [ { "account": "Merchandise Inventory", "debit": 25 }, { "account": "Cash", "credit": 25 }, { "account": "New Bal: 1225 + 25 = 1250. Units: 100. New Avg = ₱12.50.", "isExplanation": true } ] },
        { "date": "May 15", "description": "Sold 80 units for ₱25 each.", "rows": 5, "solution": [ { "account": "Accounts Receivable", "debit": 2000 }, { "account": "Sales", "credit": 2000 }, { "account": "Cost of Goods Sold", "debit": 1000 }, { "account": "Merchandise Inventory", "credit": 1000 }, { "account": "COGS: 80 units * ₱12.50 avg = 1000.", "isExplanation": true } ] },
        { "date": "May 20", "description": "Customer returned 10 units from May 15 sale (Good condition, put back to stock).", "rows": 5, "solution": [ { "account": "Sales Returns and Allowances", "debit": 250 }, { "account": "Accounts Receivable", "credit": 250 }, { "account": "Merchandise Inventory", "debit": 125 }, { "account": "Cost of Goods Sold", "credit": 125 }, { "account": "Return to Inv: 10 * ₱12.50 cost.", "isExplanation": true } ] },
        { "date": "May 22", "description": "Paid supplier for May 1 purchase in full.", "rows": 3, "solution": [ { "account": "Accounts Payable", "debit": 1000 }, { "account": "Cash", "credit": 1000 }, { "account": "Payment.", "isExplanation": true } ] },
        { "date": "May 24", "description": "Paid freight out ₱50 on May 15 sale.", "rows": 3, "solution": [ { "account": "Freight Out", "debit": 50 }, { "account": "Cash", "credit": 50 }, { "account": "Delivery expense.", "isExplanation": true } ] },
        { "date": "May 25", "description": "Purchased Supplies ₱100 cash (Not merchandise).", "rows": 3, "solution": [ { "account": "Supplies", "debit": 100 }, { "account": "Cash", "credit": 100 }, { "account": "Supplies purchase (No affect on Inv Avg)", "isExplanation": true } ] },
        { "date": "May 28", "description": "Owner withdrew ₱500.", "rows": 3, "solution": [ { "account": "Owner's Drawings", "debit": 500 }, { "account": "Cash", "credit": 500 }, { "account": "Withdrawal.", "isExplanation": true } ] },
        { "date": "May 29", "description": "Received payment from May 15 customer within discount (Terms 2/10).", "rows": 3, "solution": [ { "account": "Cash", "debit": 1715 }, { "account": "Sales Discounts", "debit": 35 }, { "account": "Accounts Receivable", "credit": 1750 }, { "account": "Collection.", "isExplanation": true } ] },
        { "date": "May 30", "description": "Paid salaries ₱500.", "rows": 3, "solution": [ { "account": "Salaries Expense", "debit": 500 }, { "account": "Cash", "credit": 500 }, { "account": "Expense.", "isExplanation": true } ] },
        { "date": "May 31", "description": "Sold remaining 30 units for cash ₱30 each.", "rows": 5, "solution": [ { "account": "Cash", "debit": 900 }, { "account": "Sales", "credit": 900 }, { "account": "Cost of Goods Sold", "debit": 375 }, { "account": "Merchandise Inventory", "credit": 375 }, { "account": "COGS: 30 units * ₱12.50 avg = 375.", "isExplanation": true } ] }
      ],
      "type": "Journalizing"
    }
  },
  {
    "FABM1-Merch-Perpe-MovingAvg-006": {
      "id": "set6_perpetual_movingavg",
      "instructions": "Journalize the transactions using Perpetual Inventory System and Moving Average Costing. Use the following accounts: Cash, Accounts Receivable, Purchases, Purchase Returns and Allowances, Purchase Discounts, Freight In, Freight Out, Sales, Sales Returns and Allowances, Sales Discounts, Accounts Payable, Owner's Capital, Owner's Drawings, Rent Expense, Salaries Expense, Merchandise Inventory, Cost of Goods Sold.",
      "subject": "FABM1",
      "title": "Set 6: Perpetual Inventory (Moving Avg)",
      "topic": "Journalizing - Merchandising Business Transactions",
      "transactions": [
        { "date": "Jun 1", "description": "Owner invested ₱100,000 cash.", "rows": 3, "solution": [ { "account": "Cash", "debit": 100000 }, { "account": "Owner's Capital", "credit": 100000 }, { "account": "Investment.", "isExplanation": true } ] },
        { "date": "Jun 2", "description": "Purchased 500 units @ ₱20 on account.", "rows": 3, "solution": [ { "account": "Merchandise Inventory", "debit": 10000 }, { "account": "Accounts Payable", "credit": 10000 }, { "account": "Purchased 500 units @ ₱20.", "isExplanation": true } ] },
        { "date": "Jun 3", "description": "Paid freight in ₱200.", "rows": 3, "solution": [ { "account": "Merchandise Inventory", "debit": 200 }, { "account": "Cash", "credit": 200 }, { "account": "Freight increases unit cost.", "isExplanation": true } ] },
        { "date": "Jun 5", "description": "Returned 25 units to supplier (₱20 credit/unit).", "rows": 3, "solution": [ { "account": "Accounts Payable", "debit": 500 }, { "account": "Merchandise Inventory", "credit": 500 }, { "account": "Return.", "isExplanation": true } ] },
        { "date": "Jun 8", "description": "Sold 100 units @ ₱50 on account.", "rows": 5, "solution": [ { "account": "Accounts Receivable", "debit": 5000 }, { "account": "Sales", "credit": 5000 }, { "account": "Cost of Goods Sold", "debit": 2042.11 }, { "account": "Merchandise Inventory", "credit": 2042.11 }, { "account": "COGS Moving Avg.", "isExplanation": true } ] },
        { "date": "Jun 10", "description": "Paid freight out ₱100.", "rows": 3, "solution": [ { "account": "Freight Out", "debit": 100 }, { "account": "Cash", "credit": 100 }, { "account": "Delivery.", "isExplanation": true } ] },
        { "date": "Jun 12", "description": "Paid supplier in full (with discount).", "rows": 3, "solution": [ { "account": "Accounts Payable", "debit": 9500 }, { "account": "Merchandise Inventory", "credit": 190 }, { "account": "Cash", "credit": 9310 }, { "account": "Payment with discount.", "isExplanation": true } ] },
        { "date": "Jun 15", "description": "Customer returned 4 units from Jun 8 sale. (Restock).", "rows": 5, "solution": [ { "account": "Sales Returns and Allowances", "debit": 200 }, { "account": "Accounts Receivable", "credit": 200 }, { "account": "Merchandise Inventory", "debit": 81.68 }, { "account": "Cost of Goods Sold", "credit": 81.68 }, { "account": "Return to inventory.", "isExplanation": true } ] },
        { "date": "Jun 18", "description": "Collected from customer (no discount).", "rows": 3, "solution": [ { "account": "Cash", "debit": 4800 }, { "account": "Accounts Receivable", "credit": 4800 }, { "account": "Collection.", "isExplanation": true } ] },
        { "date": "Jun 20", "description": "Purchased 80 units @ ₱25 cash.", "rows": 3, "solution": [ { "account": "Merchandise Inventory", "debit": 2000 }, { "account": "Cash", "credit": 2000 }, { "account": "Update Average Cost.", "isExplanation": true } ] },
        { "date": "Jun 25", "description": "Sold 50 units @ ₱60 cash.", "rows": 5, "solution": [ { "account": "Cash", "debit": 3000 }, { "account": "Sales", "credit": 3000 }, { "account": "Cost of Goods Sold", "debit": 1025 }, { "account": "Merchandise Inventory", "credit": 1025 }, { "account": "COGS Moving Avg.", "isExplanation": true } ] },
        { "date": "Jun 28", "description": "Paid Rent ₱1,500.", "rows": 3, "solution": [ { "account": "Rent Expense", "debit": 1500 }, { "account": "Cash", "credit": 1500 }, { "account": "Rent.", "isExplanation": true } ] },
        { "date": "Jun 29", "description": "Paid Salaries ₱2,000.", "rows": 3, "solution": [ { "account": "Salaries Expense", "debit": 2000 }, { "account": "Cash", "credit": 2000 }, { "account": "Salaries.", "isExplanation": true } ] },
        { "date": "Jun 30", "description": "Owner withdrew ₱1,000.", "rows": 3, "solution": [ { "account": "Owner's Drawings", "debit": 1000 }, { "account": "Cash", "credit": 1000 }, { "account": "Withdrawal.", "isExplanation": true } ] },
        { "date": "Jun 30", "description": "Purchased 200 units @ ₱25 on account.", "rows": 3, "solution": [ { "account": "Merchandise Inventory", "debit": 5000 }, { "account": "Accounts Payable", "credit": 5000 }, { "account": "Purchase.", "isExplanation": true } ] }
      ],
      "type": "Journalizing"
    }
  },
  {
    "FABM1-Merch-Perpe-MovingAvg-007": {
      "id": "set7_perpetual_movingavg",
      "instructions": "Journalize the transactions using Perpetual Inventory System and Moving Average Costing. Use the following accounts: Cash, Accounts Receivable, Purchases, Purchase Returns and Allowances, Purchase Discounts, Freight In, Freight Out, Sales, Sales Returns and Allowances, Sales Discounts, Accounts Payable, Owner's Capital, Advertising Expense, Utilities Expense, Merchandise Inventory, Cost of Goods Sold.",
      "subject": "FABM1",
      "title": "Set 7: Perpetual Inventory (Moving Avg)",
      "topic": "Journalizing - Merchandising Business Transactions",
      "transactions": [
        { "date": "Jul 1", "description": "Owner invested ₱60,000 cash.", "rows": 3, "solution": [ { "account": "Cash", "debit": 60000 }, { "account": "Owner's Capital", "credit": 60000 }, { "account": "Investment.", "isExplanation": true } ] },
        { "date": "Jul 2", "description": "Purchased 400 units @ ₱20, terms 2/10, n/30.", "rows": 3, "solution": [ { "account": "Merchandise Inventory", "debit": 8000 }, { "account": "Accounts Payable", "credit": 8000 }, { "account": "Purchased 400 units.", "isExplanation": true } ] },
        { "date": "Jul 3", "description": "Paid freight in ₱150.", "rows": 3, "solution": [ { "account": "Merchandise Inventory", "debit": 150 }, { "account": "Cash", "credit": 150 }, { "account": "Freight.", "isExplanation": true } ] },
        { "date": "Jul 5", "description": "Returned 20 units (₱20 credit/unit).", "rows": 3, "solution": [ { "account": "Accounts Payable", "debit": 400 }, { "account": "Merchandise Inventory", "credit": 400 }, { "account": "Return.", "isExplanation": true } ] },
        { "date": "Jul 7", "description": "Sold 100 units @ ₱40, terms 1/10, n/30.", "rows": 5, "solution": [ { "account": "Accounts Receivable", "debit": 4000 }, { "account": "Sales", "credit": 4000 }, { "account": "Cost of Goods Sold", "debit": 2039.47 }, { "account": "Merchandise Inventory", "credit": 2039.47 }, { "account": "COGS Moving Avg.", "isExplanation": true } ] },
        { "date": "Jul 8", "description": "Paid freight out ₱100.", "rows": 3, "solution": [ { "account": "Freight Out", "debit": 100 }, { "account": "Cash", "credit": 100 }, { "account": "Delivery.", "isExplanation": true } ] },
        { "date": "Jul 12", "description": "Paid supplier in full (with discount).", "rows": 3, "solution": [ { "account": "Accounts Payable", "debit": 7600 }, { "account": "Merchandise Inventory", "credit": 152 }, { "account": "Cash", "credit": 7448 }, { "account": "Payment.", "isExplanation": true } ] },
        { "date": "Jul 15", "description": "Received return of 7 units from customer.", "rows": 5, "solution": [ { "account": "Sales Returns and Allowances", "debit": 280 }, { "account": "Accounts Receivable", "credit": 280 }, { "account": "Merchandise Inventory", "debit": 142.76 }, { "account": "Cost of Goods Sold", "credit": 142.76 }, { "account": "Return.", "isExplanation": true } ] },
        { "date": "Jul 17", "description": "Collected from customer (with discount).", "rows": 3, "solution": [ { "account": "Cash", "debit": 3682.8 }, { "account": "Sales Discounts", "debit": 37.2 }, { "account": "Accounts Receivable", "credit": 3720 }, { "account": "Collection.", "isExplanation": true } ] },
        { "date": "Jul 20", "description": "Purchased 60 units @ ₱25 cash.", "rows": 3, "solution": [ { "account": "Merchandise Inventory", "debit": 1500 }, { "account": "Cash", "credit": 1500 }, { "account": "Cash purchase.", "isExplanation": true } ] },
        { "date": "Jul 22", "description": "Sold 50 units @ ₱40 cash.", "rows": 5, "solution": [ { "account": "Cash", "debit": 2000 }, { "account": "Sales", "credit": 2000 }, { "account": "Cost of Goods Sold", "debit": 1019.75 }, { "account": "Merchandise Inventory", "credit": 1019.75 }, { "account": "FIFO COGS.", "isExplanation": true } ] },
        { "date": "Jul 25", "description": "Paid advertising ₱500.", "rows": 3, "solution": [ { "account": "Advertising Expense", "debit": 500 }, { "account": "Cash", "credit": 500 }, { "account": "Advertising.", "isExplanation": true } ] },
        { "date": "Jul 28", "description": "Paid utilities ₱600.", "rows": 3, "solution": [ { "account": "Utilities Expense", "debit": 600 }, { "account": "Cash", "credit": 600 }, { "account": "Utilities.", "isExplanation": true } ] },
        { "date": "Jul 30", "description": "Purchased 100 units @ ₱30 on account.", "rows": 3, "solution": [ { "account": "Merchandise Inventory", "debit": 3000 }, { "account": "Accounts Payable", "credit": 3000 }, { "account": "Purchase.", "isExplanation": true } ] },
        { "date": "Jul 31", "description": "Returned 3 units from Jul 30 purchase.", "rows": 3, "solution": [ { "account": "Accounts Payable", "debit": 90 }, { "account": "Merchandise Inventory", "credit": 90 }, { "account": "Return.", "isExplanation": true } ] }
      ],
      "type": "Journalizing"
    }
  },
  {
    "FABM1-Merch-Perpe-MovingAvg-008": {
      "id": "set8_perpetual_movingavg",
      "instructions": "Journalize the transactions using Perpetual Inventory System and Moving Average Costing. Use the following accounts: Cash, Accounts Receivable, Purchases, Purchase Returns and Allowances, Purchase Discounts, Freight In, Sales, Sales Returns and Allowances, Sales Discounts, Accounts Payable, Owner's Capital, Owner's Drawings, Supplies, Supplies Expense, Rent Expense, Merchandise Inventory, Cost of Goods Sold.",
      "subject": "FABM1",
      "title": "Set 8: Perpetual Inventory (Moving Avg)",
      "topic": "Journalizing - Merchandising Business Transactions",
      "transactions": [
        { "date": "Aug 1", "description": "Owner invested ₱70,000 cash.", "rows": 3, "solution": [ { "account": "Cash", "debit": 70000 }, { "account": "Owner's Capital", "credit": 70000 }, { "account": "Investment.", "isExplanation": true } ] },
        { "date": "Aug 2", "description": "Purchased 600 units @ ₱20 on account, 2/10, n/30.", "rows": 3, "solution": [ { "account": "Merchandise Inventory", "debit": 12000 }, { "account": "Accounts Payable", "credit": 12000 }, { "account": "Purchase.", "isExplanation": true } ] },
        { "date": "Aug 3", "description": "Paid freight in ₱300.", "rows": 3, "solution": [ { "account": "Merchandise Inventory", "debit": 300 }, { "account": "Cash", "credit": 300 }, { "account": "Freight.", "isExplanation": true } ] },
        { "date": "Aug 5", "description": "Returned 30 defective units (₱20 credit).", "rows": 3, "solution": [ { "account": "Accounts Payable", "debit": 600 }, { "account": "Merchandise Inventory", "credit": 600 }, { "account": "Return.", "isExplanation": true } ] },
        { "date": "Aug 8", "description": "Paid supplier in full (with discount).", "rows": 3, "solution": [ { "account": "Accounts Payable", "debit": 11400 }, { "account": "Merchandise Inventory", "credit": 228 }, { "account": "Cash", "credit": 11172 }, { "account": "Payment.", "isExplanation": true } ] },
        { "date": "Aug 10", "description": "Sold 200 units @ ₱30.", "rows": 5, "solution": [ { "account": "Accounts Receivable", "debit": 6000 }, { "account": "Sales", "credit": 6000 }, { "account": "Cost of Goods Sold", "debit": 4025.26 }, { "account": "Merchandise Inventory", "credit": 4025.26 }, { "account": "COGS Moving Avg.", "isExplanation": true } ] },
        { "date": "Aug 12", "description": "Purchased supplies ₱500 cash.", "rows": 3, "solution": [ { "account": "Supplies", "debit": 500 }, { "account": "Cash", "credit": 500 }, { "account": "Supplies.", "isExplanation": true } ] },
        { "date": "Aug 15", "description": "Customer returned 16 units (approx ₱31.25 sales price).", "rows": 5, "solution": [ { "account": "Sales Returns and Allowances", "debit": 500 }, { "account": "Accounts Receivable", "credit": 500 }, { "account": "Merchandise Inventory", "debit": 322.02 }, { "account": "Cost of Goods Sold", "credit": 322.02 }, { "account": "Return.", "isExplanation": true } ] },
        { "date": "Aug 18", "description": "Collected account in full.", "rows": 3, "solution": [ { "account": "Cash", "debit": 5500 }, { "account": "Accounts Receivable", "credit": 5500 }, { "account": "Collection.", "isExplanation": true } ] },
        { "date": "Aug 20", "description": "Purchased 160 units @ ₱25 cash.", "rows": 3, "solution": [ { "account": "Merchandise Inventory", "debit": 4000 }, { "account": "Cash", "credit": 4000 }, { "account": "Purchase.", "isExplanation": true } ] },
        { "date": "Aug 22", "description": "Sold 80 units @ ₱50 cash.", "rows": 5, "solution": [ { "account": "Cash", "debit": 4000 }, { "account": "Sales", "credit": 4000 }, { "account": "Cost of Goods Sold", "debit": 2041.67 }, { "account": "Merchandise Inventory", "credit": 2041.67 }, { "account": "Sale.", "isExplanation": true } ] },
        { "date": "Aug 25", "description": "Owner withdrew ₱2,000.", "rows": 3, "solution": [ { "account": "Owner's Drawings", "debit": 2000 }, { "account": "Cash", "credit": 2000 }, { "account": "Withdrawal.", "isExplanation": true } ] },
        { "date": "Aug 28", "description": "Paid rent ₱1,200.", "rows": 3, "solution": [ { "account": "Rent Expense", "debit": 1200 }, { "account": "Cash", "credit": 1200 }, { "account": "Rent.", "isExplanation": true } ] },
        { "date": "Aug 30", "description": "Adjusting entry: Supplies used ₱200.", "rows": 3, "solution": [ { "account": "Supplies Expense", "debit": 200 }, { "account": "Supplies", "credit": 200 }, { "account": "Adjustment.", "isExplanation": true } ] },
        { "date": "Aug 31", "description": "Sold 50 units on account @ ₱40.", "rows": 5, "solution": [ { "account": "Accounts Receivable", "debit": 2000 }, { "account": "Sales", "credit": 2000 }, { "account": "Cost of Goods Sold", "debit": 1087.21 }, { "account": "Merchandise Inventory", "credit": 1087.21 }, { "account": "Sale.", "isExplanation": true } ] }
      ],
      "type": "Journalizing"
    }
  },
  {
    "FABM1-Merch-Perpe-MovingAvg-009": {
      "id": "set9_perpetual_movingavg",
      "instructions": "Journalize the transactions using Perpetual Inventory System and Moving Average Costing. Use the following accounts: Cash, Accounts Receivable, Purchases, Purchase Returns and Allowances, Purchase Discounts, Freight In, Sales, Sales Returns and Allowances, Accounts Payable, Owner's Capital, Salaries Expense, Utilities Expense, Equipment, Notes Payable, Interest Expense, Merchandise Inventory, Cost of Goods Sold.",
      "subject": "FABM1",
      "title": "Set 9: Perpetual Inventory (Moving Avg)",
      "topic": "Journalizing - Merchandising Business Transactions",
      "transactions": [
        { "date": "Sep 1", "description": "Owner invested ₱30,000 cash.", "rows": 3, "solution": [ { "account": "Cash", "debit": 30000 }, { "account": "Owner's Capital", "credit": 30000 }, { "account": "Investment.", "isExplanation": true } ] },
        { "date": "Sep 2", "description": "Purchased 200 units @ ₱25 on account.", "rows": 3, "solution": [ { "account": "Merchandise Inventory", "debit": 5000 }, { "account": "Accounts Payable", "credit": 5000 }, { "account": "Purchase.", "isExplanation": true } ] },
        { "date": "Sep 3", "description": "Paid freight in ₱100.", "rows": 3, "solution": [ { "account": "Merchandise Inventory", "debit": 100 }, { "account": "Cash", "credit": 100 }, { "account": "Freight.", "isExplanation": true } ] },
        { "date": "Sep 5", "description": "Returned 8 units (₱25 credit).", "rows": 3, "solution": [ { "account": "Accounts Payable", "debit": 200 }, { "account": "Merchandise Inventory", "credit": 200 }, { "account": "Return.", "isExplanation": true } ] },
        { "date": "Sep 8", "description": "Sold 60 units @ ₱50.", "rows": 5, "solution": [ { "account": "Accounts Receivable", "debit": 3000 }, { "account": "Sales", "credit": 3000 }, { "account": "Cost of Goods Sold", "debit": 1531.25 }, { "account": "Merchandise Inventory", "credit": 1531.25 }, { "account": "COGS Moving Avg.", "isExplanation": true } ] },
        { "date": "Sep 10", "description": "Received return 2 units.", "rows": 5, "solution": [ { "account": "Sales Returns and Allowances", "debit": 100 }, { "account": "Accounts Receivable", "credit": 100 }, { "account": "Merchandise Inventory", "debit": 51.04 }, { "account": "Cost of Goods Sold", "credit": 51.04 }, { "account": "Return.", "isExplanation": true } ] },
        { "date": "Sep 12", "description": "Paid supplier in full (no discount).", "rows": 3, "solution": [ { "account": "Accounts Payable", "debit": 4800 }, { "account": "Cash", "credit": 4800 }, { "account": "Payment.", "isExplanation": true } ] },
        { "date": "Sep 15", "description": "Collected from customer in full.", "rows": 3, "solution": [ { "account": "Cash", "debit": 2900 }, { "account": "Accounts Receivable", "credit": 2900 }, { "account": "Collection.", "isExplanation": true } ] },
        { "date": "Sep 18", "description": "Purchased Equipment ₱10,000 signing a note.", "rows": 3, "solution": [ { "account": "Equipment", "debit": 10000 }, { "account": "Notes Payable", "credit": 10000 }, { "account": "Equipment.", "isExplanation": true } ] },
        { "date": "Sep 20", "description": "Purchased 100 units @ ₱25 cash.", "rows": 3, "solution": [ { "account": "Merchandise Inventory", "debit": 2500 }, { "account": "Cash", "credit": 2500 }, { "account": "Purchase.", "isExplanation": true } ] },
        { "date": "Sep 22", "description": "Sold 80 units @ ₱50 cash.", "rows": 5, "solution": [ { "account": "Cash", "debit": 4000 }, { "account": "Sales", "credit": 4000 }, { "account": "Cost of Goods Sold", "debit": 2041.67 }, { "account": "Merchandise Inventory", "credit": 2041.67 }, { "account": "Sale.", "isExplanation": true } ] },
        { "date": "Sep 25", "description": "Paid salaries ₱1,500.", "rows": 3, "solution": [ { "account": "Salaries Expense", "debit": 1500 }, { "account": "Cash", "credit": 1500 }, { "account": "Salaries.", "isExplanation": true } ] },
        { "date": "Sep 28", "description": "Paid utilities ₱500.", "rows": 3, "solution": [ { "account": "Utilities Expense", "debit": 500 }, { "account": "Cash", "credit": 500 }, { "account": "Utilities.", "isExplanation": true } ] },
        { "date": "Sep 30", "description": "Paid interest on note ₱100.", "rows": 3, "solution": [ { "account": "Interest Expense", "debit": 100 }, { "account": "Cash", "credit": 100 }, { "account": "Interest.", "isExplanation": true } ] },
        { "date": "Sep 30", "description": "Sold 20 units @ ₱50.", "rows": 5, "solution": [ { "account": "Accounts Receivable", "debit": 1000 }, { "account": "Sales", "credit": 1000 }, { "account": "Cost of Goods Sold", "debit": 510.42 }, { "account": "Merchandise Inventory", "credit": 510.42 }, { "account": "Sale.", "isExplanation": true } ] }
      ],
      "type": "Journalizing"
    }
  },
  {
    "FABM1-Merch-Perpe-MovingAvg-010": {
      "id": "set10_perpetual_movingavg",
      "instructions": "Journalize the transactions using Perpetual Inventory System and Moving Average Costing. Use the following accounts: Cash, Accounts Receivable, Purchases, Purchase Returns and Allowances, Purchase Discounts, Freight In, Sales, Sales Returns and Allowances, Sales Discounts, Accounts Payable, Owner's Capital, Owner's Drawings, Freight Out, Advertising Expense, Merchandise Inventory, Cost of Goods Sold.",
      "subject": "FABM1",
      "title": "Set 10: Perpetual Inventory (Moving Avg)",
      "topic": "Journalizing - Merchandising Business Transactions",
      "transactions": [
        { "date": "Oct 1", "description": "Owner invested ₱25,000 cash.", "rows": 3, "solution": [ { "account": "Cash", "debit": 25000 }, { "account": "Owner's Capital", "credit": 25000 }, { "account": "Investment.", "isExplanation": true } ] },
        { "date": "Oct 2", "description": "Purchased 350 units @ ₱20, 1/10, n/30.", "rows": 3, "solution": [ { "account": "Merchandise Inventory", "debit": 7000 }, { "account": "Accounts Payable", "credit": 7000 }, { "account": "Purchase.", "isExplanation": true } ] },
        { "date": "Oct 3", "description": "Paid freight in ₱150.", "rows": 3, "solution": [ { "account": "Merchandise Inventory", "debit": 150 }, { "account": "Cash", "credit": 150 }, { "account": "Freight.", "isExplanation": true } ] },
        { "date": "Oct 5", "description": "Sold 100 units @ ₱30.", "rows": 5, "solution": [ { "account": "Accounts Receivable", "debit": 3000 }, { "account": "Sales", "credit": 3000 }, { "account": "Cost of Goods Sold", "debit": 2042.85 }, { "account": "Merchandise Inventory", "credit": 2042.85 }, { "account": "COGS.", "isExplanation": true } ] },
        { "date": "Oct 6", "description": "Paid freight out ₱100.", "rows": 3, "solution": [ { "account": "Freight Out", "debit": 100 }, { "account": "Cash", "credit": 100 }, { "account": "Delivery.", "isExplanation": true } ] },
        { "date": "Oct 8", "description": "Returned 10 units (₱20 credit).", "rows": 3, "solution": [ { "account": "Accounts Payable", "debit": 200 }, { "account": "Merchandise Inventory", "credit": 200 }, { "account": "Return.", "isExplanation": true } ] },
        { "date": "Oct 12", "description": "Paid supplier in full (with discount).", "rows": 3, "solution": [ { "account": "Accounts Payable", "debit": 6800 }, { "account": "Merchandise Inventory", "credit": 68 }, { "account": "Cash", "credit": 6732 }, { "account": "Payment.", "isExplanation": true } ] },
        { "date": "Oct 15", "description": "Sold 50 units @ ₱30.", "rows": 5, "solution": [ { "account": "Cash", "debit": 1500 }, { "account": "Sales", "credit": 1500 }, { "account": "Cost of Goods Sold", "debit": 1021.43 }, { "account": "Merchandise Inventory", "credit": 1021.43 }, { "account": "Sale.", "isExplanation": true } ] },
        { "date": "Oct 17", "description": "Return from customer 3.33 units (approx ₱100 sales).", "rows": 5, "solution": [ { "account": "Sales Returns and Allowances", "debit": 100 }, { "account": "Accounts Receivable", "credit": 100 }, { "account": "Merchandise Inventory", "debit": 68.09 }, { "account": "Cost of Goods Sold", "credit": 68.09 }, { "account": "Return.", "isExplanation": true } ] },
        { "date": "Oct 20", "description": "Collected from customer in full.", "rows": 3, "solution": [ { "account": "Cash", "debit": 2900 }, { "account": "Accounts Receivable", "credit": 2900 }, { "account": "Collection.", "isExplanation": true } ] },
        { "date": "Oct 22", "description": "Purchased 100 units @ ₱20 cash.", "rows": 3, "solution": [ { "account": "Merchandise Inventory", "debit": 2000 }, { "account": "Cash", "credit": 2000 }, { "account": "Purchase.", "isExplanation": true } ] },
        { "date": "Oct 25", "description": "Paid advertising ₱300.", "rows": 3, "solution": [ { "account": "Advertising Expense", "debit": 300 }, { "account": "Cash", "credit": 300 }, { "account": "Advertising.", "isExplanation": true } ] },
        { "date": "Oct 28", "description": "Owner withdrew ₱500.", "rows": 3, "solution": [ { "account": "Owner's Drawings", "debit": 500 }, { "account": "Cash", "credit": 500 }, { "account": "Withdrawal.", "isExplanation": true } ] },
        { "date": "Oct 30", "description": "Purchased 150 units @ ₱20.", "rows": 3, "solution": [ { "account": "Merchandise Inventory", "debit": 3000 }, { "account": "Accounts Payable", "credit": 3000 }, { "account": "Purchase.", "isExplanation": true } ] },
        { "date": "Oct 31", "description": "Recorded inventory shrinkage (Perpetual - Adjust).", "rows": 3, "solution": [ { "account": "Cost of Goods Sold", "debit": 50 }, { "account": "Merchandise Inventory", "credit": 50 }, { "account": "Shrinkage.", "isExplanation": true } ] }
      ],
      "type": "Journalizing"
    }
  },
  {
    "FABM1-Merch-Perpe-MovingAvg-011": {
      "id": "set11_perpetual_movingavg",
      "instructions": "Journalize the transactions using Perpetual Inventory System and Moving Average Costing. Use the following accounts: Cash, Accounts Receivable, Purchases, Purchase Returns and Allowances, Purchase Discounts, Freight In, Freight Out, Sales, Sales Returns and Allowances, Accounts Payable, Owner's Capital, Insurance Expense, Salaries Expense, Prepaid Insurance, Merchandise Inventory, Cost of Goods Sold.",
      "subject": "FABM1",
      "title": "Set 11: Perpetual Inventory (Moving Avg)",
      "topic": "Journalizing - Merchandising Business Transactions",
      "transactions": [
        { "date": "Nov 1", "description": "Owner invested ₱40,000 cash.", "rows": 3, "solution": [ { "account": "Cash", "debit": 40000 }, { "account": "Owner's Capital", "credit": 40000 }, { "account": "Investment.", "isExplanation": true } ] },
        { "date": "Nov 2", "description": "Purchased 400 units @ ₱20, 2/10, n/30.", "rows": 3, "solution": [ { "account": "Merchandise Inventory", "debit": 8000 }, { "account": "Accounts Payable", "credit": 8000 }, { "account": "Purchase.", "isExplanation": true } ] },
        { "date": "Nov 3", "description": "Paid freight in ₱200.", "rows": 3, "solution": [ { "account": "Merchandise Inventory", "debit": 200 }, { "account": "Cash", "credit": 200 }, { "account": "Freight.", "isExplanation": true } ] },
        { "date": "Nov 5", "description": "Returned 15 units (₱20 credit).", "rows": 3, "solution": [ { "account": "Accounts Payable", "debit": 300 }, { "account": "Merchandise Inventory", "credit": 300 }, { "account": "Return.", "isExplanation": true } ] },
        { "date": "Nov 8", "description": "Sold 100 units @ ₱40.", "rows": 5, "solution": [ { "account": "Accounts Receivable", "debit": 4000 }, { "account": "Sales", "credit": 4000 }, { "account": "Cost of Goods Sold", "debit": 2051.94 }, { "account": "Merchandise Inventory", "credit": 2051.94 }, { "account": "Sale.", "isExplanation": true } ] },
        { "date": "Nov 10", "description": "Paid freight out ₱100.", "rows": 3, "solution": [ { "account": "Freight Out", "debit": 100 }, { "account": "Cash", "credit": 100 }, { "account": "Delivery.", "isExplanation": true } ] },
        { "date": "Nov 12", "description": "Paid supplier in full (with discount).", "rows": 3, "solution": [ { "account": "Accounts Payable", "debit": 7700 }, { "account": "Merchandise Inventory", "credit": 154 }, { "account": "Cash", "credit": 7546 }, { "account": "Payment.", "isExplanation": true } ] },
        { "date": "Nov 15", "description": "Sold 50 units @ ₱40.", "rows": 5, "solution": [ { "account": "Cash", "debit": 2000 }, { "account": "Sales", "credit": 2000 }, { "account": "Cost of Goods Sold", "debit": 1025.97 }, { "account": "Merchandise Inventory", "credit": 1025.97 }, { "account": "Sale.", "isExplanation": true } ] },
        { "date": "Nov 18", "description": "Customer returned 5 units.", "rows": 5, "solution": [ { "account": "Sales Returns and Allowances", "debit": 200 }, { "account": "Cash", "credit": 200 }, { "account": "Merchandise Inventory", "debit": 102.6 }, { "account": "Cost of Goods Sold", "credit": 102.6 }, { "account": "Return.", "isExplanation": true } ] },
        { "date": "Nov 20", "description": "Collected from account customer.", "rows": 3, "solution": [ { "account": "Cash", "debit": 4000 }, { "account": "Accounts Receivable", "credit": 4000 }, { "account": "Collection.", "isExplanation": true } ] },
        { "date": "Nov 22", "description": "Purchased 150 units @ ₱20 cash.", "rows": 3, "solution": [ { "account": "Merchandise Inventory", "debit": 3000 }, { "account": "Cash", "credit": 3000 }, { "account": "Purchase.", "isExplanation": true } ] },
        { "date": "Nov 25", "description": "Purchased 1-year insurance ₱1,200.", "rows": 3, "solution": [ { "account": "Prepaid Insurance", "debit": 1200 }, { "account": "Cash", "credit": 1200 }, { "account": "Insurance.", "isExplanation": true } ] },
        { "date": "Nov 28", "description": "Paid Salaries ₱1,500.", "rows": 3, "solution": [ { "account": "Salaries Expense", "debit": 1500 }, { "account": "Cash", "credit": 1500 }, { "account": "Salaries.", "isExplanation": true } ] },
        { "date": "Nov 30", "description": "Recorded expired insurance ₱100.", "rows": 3, "solution": [ { "account": "Insurance Expense", "debit": 100 }, { "account": "Prepaid Insurance", "credit": 100 }, { "account": "Adjustment.", "isExplanation": true } ] },
        { "date": "Nov 30", "description": "Sold 37.5 units (approx ₱1500 sales).", "rows": 5, "solution": [ { "account": "Accounts Receivable", "debit": 1500 }, { "account": "Sales", "credit": 1500 }, { "account": "Cost of Goods Sold", "debit": 769.48 }, { "account": "Merchandise Inventory", "credit": 769.48 }, { "account": "Sale.", "isExplanation": true } ] }
      ],
      "type": "Journalizing"
    }
  },
  {
    "FABM1-Merch-Perpe-MovingAvg-012": {
      "id": "set12_perpetual_movingavg",
      "instructions": "Journalize the transactions using Perpetual Inventory System and Moving Average Costing. Use the following accounts: Cash, Accounts Receivable, Purchases, Purchase Returns and Allowances, Purchase Discounts, Freight In, Sales, Sales Returns and Allowances, Sales Discounts, Accounts Payable, Owner's Capital, Owner's Drawings, Utilities Expense, Rent Expense, Merchandise Inventory, Cost of Goods Sold.",
      "subject": "FABM1",
      "title": "Set 12: Perpetual Inventory (Moving Avg)",
      "topic": "Journalizing - Merchandising Business Transactions",
      "transactions": [
        { "date": "Dec 1", "description": "Owner invested ₱45,000 cash.", "rows": 3, "solution": [ { "account": "Cash", "debit": 45000 }, { "account": "Owner's Capital", "credit": 45000 }, { "account": "Investment.", "isExplanation": true } ] },
        { "date": "Dec 2", "description": "Purchased 450 units @ ₱20.", "rows": 3, "solution": [ { "account": "Merchandise Inventory", "debit": 9000 }, { "account": "Accounts Payable", "credit": 9000 }, { "account": "Purchase.", "isExplanation": true } ] },
        { "date": "Dec 3", "description": "Paid freight in ₱250.", "rows": 3, "solution": [ { "account": "Merchandise Inventory", "debit": 250 }, { "account": "Cash", "credit": 250 }, { "account": "Freight.", "isExplanation": true } ] },
        { "date": "Dec 5", "description": "Sold 100 units @ ₱45.", "rows": 5, "solution": [ { "account": "Accounts Receivable", "debit": 4500 }, { "account": "Sales", "credit": 4500 }, { "account": "Cost of Goods Sold", "debit": 2055.56 }, { "account": "Merchandise Inventory", "credit": 2055.56 }, { "account": "Sale.", "isExplanation": true } ] },
        { "date": "Dec 7", "description": "Returned 20 units to supplier.", "rows": 3, "solution": [ { "account": "Accounts Payable", "debit": 400 }, { "account": "Merchandise Inventory", "credit": 400 }, { "account": "Return.", "isExplanation": true } ] },
        { "date": "Dec 9", "description": "Customer returned 6.66 units (approx ₱300).", "rows": 5, "solution": [ { "account": "Sales Returns and Allowances", "debit": 300 }, { "account": "Accounts Receivable", "credit": 300 }, { "account": "Merchandise Inventory", "debit": 136.9 }, { "account": "Cost of Goods Sold", "credit": 136.9 }, { "account": "Return.", "isExplanation": true } ] },
        { "date": "Dec 12", "description": "Paid supplier in full (no discount terms).", "rows": 3, "solution": [ { "account": "Accounts Payable", "debit": 8600 }, { "account": "Cash", "credit": 8600 }, { "account": "Payment.", "isExplanation": true } ] },
        { "date": "Dec 15", "description": "Collected from customer within discount.", "rows": 3, "solution": [ { "account": "Cash", "debit": 4116 }, { "account": "Sales Discounts", "debit": 84 }, { "account": "Accounts Receivable", "credit": 4200 }, { "account": "Collection.", "isExplanation": true } ] },
        { "date": "Dec 18", "description": "Purchased 175 units @ ₱20.", "rows": 3, "solution": [ { "account": "Merchandise Inventory", "debit": 3500 }, { "account": "Cash", "credit": 3500 }, { "account": "Purchase.", "isExplanation": true } ] },
        { "date": "Dec 20", "description": "Sold 55 units @ ₱45.", "rows": 5, "solution": [ { "account": "Cash", "debit": 2500 }, { "account": "Sales", "credit": 2500 }, { "account": "Cost of Goods Sold", "debit": 1130.56 }, { "account": "Merchandise Inventory", "credit": 1130.56 }, { "account": "Sale.", "isExplanation": true } ] },
        { "date": "Dec 22", "description": "Owner withdrew ₱800.", "rows": 3, "solution": [ { "account": "Owner's Drawings", "debit": 800 }, { "account": "Cash", "credit": 800 }, { "account": "Withdrawal.", "isExplanation": true } ] },
        { "date": "Dec 25", "description": "Paid utilities ₱450.", "rows": 3, "solution": [ { "account": "Utilities Expense", "debit": 450 }, { "account": "Cash", "credit": 450 }, { "account": "Utilities.", "isExplanation": true } ] },
        { "date": "Dec 28", "description": "Paid rent ₱1,000.", "rows": 3, "solution": [ { "account": "Rent Expense", "debit": 1000 }, { "account": "Cash", "credit": 1000 }, { "account": "Rent.", "isExplanation": true } ] },
        { "date": "Dec 30", "description": "Purchased 100 units @ ₱20.", "rows": 3, "solution": [ { "account": "Merchandise Inventory", "debit": 2000 }, { "account": "Accounts Payable", "credit": 2000 }, { "account": "Purchase.", "isExplanation": true } ] },
        { "date": "Dec 31", "description": "Shrinkage check (Perpetual - Adjust).", "rows": 3, "solution": [ { "account": "Cost of Goods Sold", "debit": 50 }, { "account": "Merchandise Inventory", "credit": 50 }, { "account": "Shrinkage.", "isExplanation": true } ] }
      ],
      "type": "Journalizing"
    }
  },
  {
    "FABM1-Merch-Perpe-MovingAvg-013": {
      "id": "set13_perpetual_movingavg",
      "instructions": "Journalize the transactions using Perpetual Inventory System and Moving Average Costing. Use the following accounts: Cash, Accounts Receivable, Purchases, Purchase Returns and Allowances, Purchase Discounts, Freight In, Sales, Sales Returns and Allowances, Sales Discounts, Accounts Payable, Owner's Capital, Owner's Drawings, Salaries Expense, Utilities Expense, Supplies, Merchandise Inventory, Cost of Goods Sold.",
      "subject": "FABM1",
      "title": "Set 13: Perpetual Inventory (Moving Avg)",
      "topic": "Journalizing - Merchandising Business Transactions",
      "transactions": [
        { "date": "Jan 1", "description": "Owner invested ₱35,000 cash.", "rows": 3, "solution": [ { "account": "Cash", "debit": 35000 }, { "account": "Owner's Capital", "credit": 35000 }, { "account": "Investment.", "isExplanation": true } ] },
        { "date": "Jan 2", "description": "Purchased 300 units @ ₱20.", "rows": 3, "solution": [ { "account": "Merchandise Inventory", "debit": 6000 }, { "account": "Accounts Payable", "credit": 6000 }, { "account": "Purchase.", "isExplanation": true } ] },
        { "date": "Jan 3", "description": "Paid freight in ₱120.", "rows": 3, "solution": [ { "account": "Merchandise Inventory", "debit": 120 }, { "account": "Cash", "credit": 120 }, { "account": "Freight.", "isExplanation": true } ] },
        { "date": "Jan 5", "description": "Returned 15 units (₱20 credit).", "rows": 3, "solution": [ { "account": "Accounts Payable", "debit": 300 }, { "account": "Merchandise Inventory", "credit": 300 }, { "account": "Return.", "isExplanation": true } ] },
        { "date": "Jan 8", "description": "Sold 100 units @ ₱40.", "rows": 5, "solution": [ { "account": "Accounts Receivable", "debit": 4000 }, { "account": "Sales", "credit": 4000 }, { "account": "Cost of Goods Sold", "debit": 2042.1 }, { "account": "Merchandise Inventory", "credit": 2042.1 }, { "account": "Sale.", "isExplanation": true } ] },
        { "date": "Jan 10", "description": "Paid supplier in full (with discount).", "rows": 3, "solution": [ { "account": "Accounts Payable", "debit": 5700 }, { "account": "Merchandise Inventory", "credit": 57 }, { "account": "Cash", "credit": 5643 }, { "account": "Payment.", "isExplanation": true } ] },
        { "date": "Jan 12", "description": "Customer returned 5 units.", "rows": 5, "solution": [ { "account": "Sales Returns and Allowances", "debit": 200 }, { "account": "Accounts Receivable", "credit": 200 }, { "account": "Merchandise Inventory", "debit": 102.1 }, { "account": "Cost of Goods Sold", "credit": 102.1 }, { "account": "Return.", "isExplanation": true } ] },
        { "date": "Jan 15", "description": "Collected from customer in full.", "rows": 3, "solution": [ { "account": "Cash", "debit": 3800 }, { "account": "Accounts Receivable", "credit": 3800 }, { "account": "Collection.", "isExplanation": true } ] },
        { "date": "Jan 18", "description": "Purchased supplies ₱300 cash.", "rows": 3, "solution": [ { "account": "Supplies", "debit": 300 }, { "account": "Cash", "credit": 300 }, { "account": "Supplies.", "isExplanation": true } ] },
        { "date": "Jan 20", "description": "Sold 45 units @ ₱40.", "rows": 5, "solution": [ { "account": "Cash", "debit": 1800 }, { "account": "Sales", "credit": 1800 }, { "account": "Cost of Goods Sold", "debit": 913.38 }, { "account": "Merchandise Inventory", "credit": 913.38 }, { "account": "Sale.", "isExplanation": true } ] },
        { "date": "Jan 22", "description": "Purchased 100 units @ ₱20.", "rows": 3, "solution": [ { "account": "Merchandise Inventory", "debit": 2000 }, { "account": "Cash", "credit": 2000 }, { "account": "Purchase.", "isExplanation": true } ] },
        { "date": "Jan 25", "description": "Paid Salaries ₱1,000.", "rows": 3, "solution": [ { "account": "Salaries Expense", "debit": 1000 }, { "account": "Cash", "credit": 1000 }, { "account": "Salaries.", "isExplanation": true } ] },
        { "date": "Jan 28", "description": "Owner withdrew ₱600.", "rows": 3, "solution": [ { "account": "Owner's Drawings", "debit": 600 }, { "account": "Cash", "credit": 600 }, { "account": "Withdrawal.", "isExplanation": true } ] },
        { "date": "Jan 30", "description": "Paid utilities ₱350.", "rows": 3, "solution": [ { "account": "Utilities Expense", "debit": 350 }, { "account": "Cash", "credit": 350 }, { "account": "Utilities.", "isExplanation": true } ] },
        { "date": "Jan 31", "description": "Sold 30 units @ ₱40.", "rows": 5, "solution": [ { "account": "Accounts Receivable", "debit": 1200 }, { "account": "Sales", "credit": 1200 }, { "account": "Cost of Goods Sold", "debit": 604.47 }, { "account": "Merchandise Inventory", "credit": 604.47 }, { "account": "Sale.", "isExplanation": true } ] }
      ],
      "type": "Journalizing"
    }
  },
  {
    "FABM1-Merch-Perpe-MovingAvg-014": {
      "id": "set14_perpetual_movingavg",
      "instructions": "Journalize the transactions using Perpetual Inventory System and Moving Average Costing. Use the following accounts: Cash, Accounts Receivable, Purchases, Purchase Returns and Allowances, Purchase Discounts, Freight In, Sales, Sales Returns and Allowances, Sales Discounts, Accounts Payable, Owner's Capital, Owner's Drawings, Advertising Expense, Rent Expense, Merchandise Inventory, Cost of Goods Sold.",
      "subject": "FABM1",
      "title": "Set 14: Perpetual Inventory (Moving Avg)",
      "topic": "Journalizing - Merchandising Business Transactions",
      "transactions": [
        { "date": "Feb 1", "description": "Owner invested ₱55,000 cash.", "rows": 3, "solution": [ { "account": "Cash", "debit": 55000 }, { "account": "Owner's Capital", "credit": 55000 }, { "account": "Investment.", "isExplanation": true } ] },
        { "date": "Feb 2", "description": "Purchased 450 units @ ₱20.", "rows": 3, "solution": [ { "account": "Merchandise Inventory", "debit": 9000 }, { "account": "Accounts Payable", "credit": 9000 }, { "account": "Purchase.", "isExplanation": true } ] },
        { "date": "Feb 3", "description": "Paid freight in ₱180.", "rows": 3, "solution": [ { "account": "Merchandise Inventory", "debit": 180 }, { "account": "Cash", "credit": 180 }, { "account": "Freight.", "isExplanation": true } ] },
        { "date": "Feb 5", "description": "Returned 22.5 units (₱450 credit).", "rows": 3, "solution": [ { "account": "Accounts Payable", "debit": 450 }, { "account": "Merchandise Inventory", "credit": 450 }, { "account": "Return.", "isExplanation": true } ] },
        { "date": "Feb 8", "description": "Sold 110 units @ ₱50.", "rows": 5, "solution": [ { "account": "Accounts Receivable", "debit": 5500 }, { "account": "Sales", "credit": 5500 }, { "account": "Cost of Goods Sold", "debit": 2246.68 }, { "account": "Merchandise Inventory", "credit": 2246.68 }, { "account": "Sale.", "isExplanation": true } ] },
        { "date": "Feb 10", "description": "Paid supplier in full.", "rows": 3, "solution": [ { "account": "Accounts Payable", "debit": 8550 }, { "account": "Cash", "credit": 8550 }, { "account": "Payment.", "isExplanation": true } ] },
        { "date": "Feb 12", "description": "Customer returned 5 units.", "rows": 5, "solution": [ { "account": "Sales Returns and Allowances", "debit": 250 }, { "account": "Accounts Receivable", "credit": 250 }, { "account": "Merchandise Inventory", "debit": 102.12 }, { "account": "Cost of Goods Sold", "credit": 102.12 }, { "account": "Return.", "isExplanation": true } ] },
        { "date": "Feb 15", "description": "Collected from customer (with discount).", "rows": 3, "solution": [ { "account": "Cash", "debit": 5145 }, { "account": "Sales Discounts", "debit": 105 }, { "account": "Accounts Receivable", "credit": 5250 }, { "account": "Collection.", "isExplanation": true } ] },
        { "date": "Feb 18", "description": "Purchased 175 units @ ₱20.", "rows": 3, "solution": [ { "account": "Merchandise Inventory", "debit": 3500 }, { "account": "Cash", "credit": 3500 }, { "account": "Purchase.", "isExplanation": true } ] },
        { "date": "Feb 20", "description": "Sold 56 units @ ₱50.", "rows": 5, "solution": [ { "account": "Cash", "debit": 2800 }, { "account": "Sales", "credit": 2800 }, { "account": "Cost of Goods Sold", "debit": 1139.38 }, { "account": "Merchandise Inventory", "credit": 1139.38 }, { "account": "Sale.", "isExplanation": true } ] },
        { "date": "Feb 22", "description": "Paid Advertising ₱400.", "rows": 3, "solution": [ { "account": "Advertising Expense", "debit": 400 }, { "account": "Cash", "credit": 400 }, { "account": "Advertising.", "isExplanation": true } ] },
        { "date": "Feb 25", "description": "Owner withdrew ₱900.", "rows": 3, "solution": [ { "account": "Owner's Drawings", "debit": 900 }, { "account": "Cash", "credit": 900 }, { "account": "Withdrawal.", "isExplanation": true } ] },
        { "date": "Feb 28", "description": "Paid Rent ₱1,100.", "rows": 3, "solution": [ { "account": "Rent Expense", "debit": 1100 }, { "account": "Cash", "credit": 1100 }, { "account": "Rent.", "isExplanation": true } ] },
        { "date": "Feb 28", "description": "Sold 36 units @ ₱50.", "rows": 5, "solution": [ { "account": "Accounts Receivable", "debit": 1800 }, { "account": "Sales", "credit": 1800 }, { "account": "Cost of Goods Sold", "debit": 732.46 }, { "account": "Merchandise Inventory", "credit": 732.46 }, { "account": "Sale.", "isExplanation": true } ] },
        { "date": "Feb 28", "description": "Shrinkage adjustment (Perpetual - Adjust).", "rows": 3, "solution": [ { "account": "Cost of Goods Sold", "debit": 50 }, { "account": "Merchandise Inventory", "credit": 50 }, { "account": "Shrinkage.", "isExplanation": true } ] }
      ],
      "type": "Journalizing"
    }
  },
  {
    "FABM1-Merch-Perpe-MovingAvg-015": {
      "id": "set15_perpetual_movingavg",
      "instructions": "Journalize the transactions using Perpetual Inventory System and Moving Average Costing. Use the following accounts: Cash, Accounts Receivable, Purchases, Purchase Returns and Allowances, Purchase Discounts, Freight In, Freight Out, Sales, Sales Returns and Allowances, Sales Discounts, Accounts Payable, Owner's Capital, Owner's Drawings, Salaries Expense, Utilities Expense, Merchandise Inventory, Cost of Goods Sold.",
      "subject": "FABM1",
      "title": "Set 15: Perpetual Inventory (Moving Avg)",
      "topic": "Journalizing - Merchandising Business Transactions",
      "transactions": [
        { "date": "Mar 1", "description": "Owner invested ₱28,000 cash.", "rows": 3, "solution": [ { "account": "Cash", "debit": 28000 }, { "account": "Owner's Capital", "credit": 28000 }, { "account": "Investment.", "isExplanation": true } ] },
        { "date": "Mar 2", "description": "Purchased 325 units @ ₱20.", "rows": 3, "solution": [ { "account": "Merchandise Inventory", "debit": 6500 }, { "account": "Accounts Payable", "credit": 6500 }, { "account": "Purchase.", "isExplanation": true } ] },
        { "date": "Mar 3", "description": "Paid freight in ₱130.", "rows": 3, "solution": [ { "account": "Merchandise Inventory", "debit": 130 }, { "account": "Cash", "credit": 130 }, { "account": "Freight.", "isExplanation": true } ] },
        { "date": "Mar 5", "description": "Returned 17.5 units (₱350 credit).", "rows": 3, "solution": [ { "account": "Accounts Payable", "debit": 350 }, { "account": "Merchandise Inventory", "credit": 350 }, { "account": "Return.", "isExplanation": true } ] },
        { "date": "Mar 8", "description": "Sold 100 units @ ₱42.", "rows": 5, "solution": [ { "account": "Accounts Receivable", "debit": 4200 }, { "account": "Sales", "credit": 4200 }, { "account": "Cost of Goods Sold", "debit": 2040 }, { "account": "Merchandise Inventory", "credit": 2040 }, { "account": "Sale.", "isExplanation": true } ] },
        { "date": "Mar 9", "description": "Paid freight out ₱80.", "rows": 3, "solution": [ { "account": "Freight Out", "debit": 80 }, { "account": "Cash", "credit": 80 }, { "account": "Delivery.", "isExplanation": true } ] },
        { "date": "Mar 11", "description": "Paid supplier in full (with discount).", "rows": 3, "solution": [ { "account": "Accounts Payable", "debit": 6150 }, { "account": "Merchandise Inventory", "credit": 61.5 }, { "account": "Cash", "credit": 6088.5 }, { "account": "Payment.", "isExplanation": true } ] },
        { "date": "Mar 14", "description": "Customer returned 3.57 units (approx ₱150 sales).", "rows": 5, "solution": [ { "account": "Sales Returns and Allowances", "debit": 150 }, { "account": "Accounts Receivable", "credit": 150 }, { "account": "Merchandise Inventory", "debit": 72.89 }, { "account": "Cost of Goods Sold", "credit": 72.89 }, { "account": "Return.", "isExplanation": true } ] },
        { "date": "Mar 16", "description": "Collected from customer in full.", "rows": 3, "solution": [ { "account": "Cash", "debit": 4050 }, { "account": "Accounts Receivable", "credit": 4050 }, { "account": "Collection.", "isExplanation": true } ] },
        { "date": "Mar 18", "description": "Purchased 90 units @ ₱20.", "rows": 3, "solution": [ { "account": "Merchandise Inventory", "debit": 1800 }, { "account": "Cash", "credit": 1800 }, { "account": "Purchase.", "isExplanation": true } ] },
        { "date": "Mar 20", "description": "Sold 52 units @ ₱42.", "rows": 5, "solution": [ { "account": "Cash", "debit": 2200 }, { "account": "Sales", "credit": 2200 }, { "account": "Cost of Goods Sold", "debit": 1056.24 }, { "account": "Merchandise Inventory", "credit": 1056.24 }, { "account": "Sale.", "isExplanation": true } ] },
        { "date": "Mar 22", "description": "Owner withdrew ₱700.", "rows": 3, "solution": [ { "account": "Owner's Drawings", "debit": 700 }, { "account": "Cash", "credit": 700 }, { "account": "Withdrawal.", "isExplanation": true } ] },
        { "date": "Mar 25", "description": "Paid Salaries ₱1,300.", "rows": 3, "solution": [ { "account": "Salaries Expense", "debit": 1300 }, { "account": "Cash", "credit": 1300 }, { "account": "Salaries.", "isExplanation": true } ] },
        { "date": "Mar 28", "description": "Paid Utilities ₱400.", "rows": 3, "solution": [ { "account": "Utilities Expense", "debit": 400 }, { "account": "Cash", "credit": 400 }, { "account": "Utilities.", "isExplanation": true } ] },
        { "date": "Mar 30", "description": "Purchased 125 units @ ₱20.", "rows": 3, "solution": [ { "account": "Merchandise Inventory", "debit": 2500 }, { "account": "Accounts Payable", "credit": 2500 }, { "account": "Purchase.", "isExplanation": true } ] }
      ],
      "type": "Journalizing"
    }
  },
  {
    "FABM1-Merch-Practice-Period-WeightedAvg-001": {
      "id": "set1_periodic_weighted_avg",
      "instructions": "Journalize the transactions using Periodic Inventory System and Weighted Average Costing. Use the following accounts: Accounts Payable, Accounts Receivable, Cash, Purchases, Purchase Returns and Allowances, Freight In, Sales, Sales Returns and Allowances, Sales Discounts, Freight Out, Supplies, Owner's Capital, Owner's Drawings, Salaries Expense.",
      "subject": "FABM1",
      "title": "Set 1: Weighted Average Costing (Periodic)",
      "topic": "Journalizing - Sample Merchandising Business",
      "transactions": [
        { "date": "Jan 1", "description": "Owner invested ₱50,000 cash.", "rows": 3, "solution": [ { "account": "Cash", "debit": 50000 }, { "account": "Owner's Capital", "credit": 50000 }, { "account": "Initial investment.", "isExplanation": true } ] },
        { "date": "Jan 2", "description": "Purchased 1,000 units at list price ₱10 each, less 10% trade discount. Terms 2/10, n/30.", "rows": 3, "solution": [ { "account": "Purchases", "debit": 9000 }, { "account": "Accounts Payable", "credit": 9000 }, { "account": "1000 units @ ₱9 (net).", "isExplanation": true } ] },
        { "date": "Jan 3", "description": "Paid freight on Jan 2 purchase, ₱500 cash.", "rows": 3, "solution": [ { "account": "Freight In", "debit": 500 }, { "account": "Cash", "credit": 500 }, { "account": "Paid freight on purchase.", "isExplanation": true } ] },
        { "date": "Jan 5", "description": "Returned 100 defective units to supplier.", "rows": 3, "solution": [ { "account": "Accounts Payable", "debit": 900 }, { "account": "Purchase Returns and Allowances", "credit": 900 }, { "account": "Returned goods to supplier.", "isExplanation": true } ] },
        { "date": "Jan 8", "description": "Sold 500 units on account for ₱20 each.", "rows": 3, "solution": [ { "account": "Accounts Receivable", "debit": 10000 }, { "account": "Sales", "credit": 10000 }, { "account": "Sold goods on account.", "isExplanation": true } ] },
        { "date": "Jan 10", "description": "Paid freight out on Jan 8 sale, ₱200.", "rows": 3, "solution": [ { "account": "Freight Out", "debit": 200 }, { "account": "Cash", "credit": 200 }, { "account": "Paid shipping to customer.", "isExplanation": true } ] },
        { "date": "Jan 12", "description": "Paid supplier for Jan 2 purchase in full, less return, within discount period.", "rows": 4, "solution": [ { "account": "Accounts Payable", "debit": 8100 }, { "account": "Purchase Discounts", "credit": 162 }, { "account": "Cash", "credit": 7938 }, { "account": "Paid within discount period.", "isExplanation": true } ] },
        { "date": "Jan 15", "description": "Purchased 400 units at ₱12 each cash.", "rows": 3, "solution": [ { "account": "Purchases", "debit": 4800 }, { "account": "Cash", "credit": 4800 }, { "account": "Cash purchase.", "isExplanation": true } ] },
        { "date": "Jan 18", "description": "Customer from Jan 8 returned 50 units.", "rows": 3, "solution": [ { "account": "Sales Returns and Allowances", "debit": 1000 }, { "account": "Accounts Receivable", "credit": 1000 }, { "account": "Customer return.", "isExplanation": true } ] },
        { "date": "Jan 20", "description": "Collected full amount from Jan 8 customer, less return, no discount.", "rows": 3, "solution": [ { "account": "Cash", "debit": 9000 }, { "account": "Accounts Receivable", "credit": 9000 }, { "account": "Collection.", "isExplanation": true } ] },
        { "date": "Jan 22", "description": "Purchased Supplies ₱500 on account.", "rows": 3, "solution": [ { "account": "Supplies", "debit": 500 }, { "account": "Accounts Payable", "credit": 500 }, { "account": "Supplies.", "isExplanation": true } ] },
        { "date": "Jan 25", "description": "Sold 200 units for cash ₱25 each.", "rows": 3, "solution": [ { "account": "Cash", "debit": 5000 }, { "account": "Sales", "credit": 5000 }, { "account": "Cash sale.", "isExplanation": true } ] },
        { "date": "Jan 28", "description": "Owner withdrew ₱2,000 cash.", "rows": 3, "solution": [ { "account": "Owner's Drawings", "debit": 2000 }, { "account": "Cash", "credit": 2000 }, { "account": "Withdrawal.", "isExplanation": true } ] },
        { "date": "Jan 30", "description": "Paid Salaries ₱1,000.", "rows": 3, "solution": [ { "account": "Salaries Expense", "debit": 1000 }, { "account": "Cash", "credit": 1000 }, { "account": "Expense.", "isExplanation": true } ] },
        { "date": "Jan 31", "description": "Purchased 100 units at ₱13 each.", "rows": 3, "solution": [ { "account": "Purchases", "debit": 1300 }, { "account": "Accounts Payable", "credit": 1300 }, { "account": "Update moving average.", "isExplanation": true } ] }
      ],
      "type": "Journalizing"
    }
  },
  {
    "FABM1-Merch-Practice-Perpe-MovingAvg-001": {
      "id": "set1_perpetual_average",
      "instructions": "Journalize the transactions using Perpetual Inventory System and Moving Average Costing. Use the following accounts: Accounts Payable, Accounts Receivable, Cash, Cost of Goods Sold, Merchandise Inventory, Sales, Sales Returns and Allowances, Sales Discounts, Freight Out, Supplies, Owner's Capital, Owner's Drawings, Salaries Expense.",
      "subject": "FABM1",
      "title": "Set 1: Moving Average Costing",
      "topic": "Journalizing - Sample Merchandising Business",
      "transactions": [
        { "date": "Jan 1", "description": "Owner invested ₱50,000 cash.", "rows": 3, "solution": [ { "account": "Cash", "debit": 50000 }, { "account": "Owner's Capital", "credit": 50000 }, { "account": "Initial investment.", "isExplanation": true } ] },
        { "date": "Jan 2", "description": "Purchased 1,000 units at list price ₱10 each, less 10% trade discount. Terms 2/10, n/30.", "rows": 3, "solution": [ { "account": "Merchandise Inventory", "debit": 9000 }, { "account": "Accounts Payable", "credit": 9000 }, { "account": "1000 units @ ₱9 (net). Bal: 1000 units, Avg ₱9.00.", "isExplanation": true } ] },
        { "date": "Jan 3", "description": "Paid freight on Jan 2 purchase, ₱500 cash.", "rows": 3, "solution": [ { "account": "Merchandise Inventory", "debit": 500 }, { "account": "Cash", "credit": 500 }, { "account": "Total Cost: ₱9500. Units: 1000. New Avg: ₱9.50.", "isExplanation": true } ] },
        { "date": "Jan 5", "description": "Returned 100 defective units to supplier (Credit based on invoice price ₱9).", "rows": 3, "solution": [ { "account": "Accounts Payable", "debit": 900 }, { "account": "Merchandise Inventory", "credit": 900 }, { "account": "Rem Cost: ₱8600. Rem Units: 900. New Avg: ₱9.56.", "isExplanation": true } ] },
        { "date": "Jan 8", "description": "Sold 500 units on account for ₱20 each.", "rows": 5, "solution": [ { "account": "Accounts Receivable", "debit": 10000 }, { "account": "Sales", "credit": 10000 }, { "account": "Cost of Goods Sold", "debit": 4780 }, { "account": "Merchandise Inventory", "credit": 4780 }, { "account": "COGS: 500 units * ₱9.56 avg = ₱4780.", "isExplanation": true } ] },
        { "date": "Jan 10", "description": "Paid freight out on Jan 8 sale, ₱200.", "rows": 3, "solution": [ { "account": "Freight Out", "debit": 200 }, { "account": "Cash", "credit": 200 }, { "account": "Paid shipping to customer.", "isExplanation": true } ] },
        { "date": "Jan 12", "description": "Paid supplier for Jan 2 purchase in full, less return, within discount period. (Bal ₱8100 * .98)", "rows": 3, "solution": [ { "account": "Accounts Payable", "debit": 8100 }, { "account": "Merchandise Inventory", "credit": 162 }, { "account": "Cash", "credit": 7938 }, { "account": "Disc reduces Inventory value. Recalc Avg required.", "isExplanation": true } ] },
        { "date": "Jan 15", "description": "Purchased 400 units at ₱12 each cash.", "rows": 3, "solution": [ { "account": "Merchandise Inventory", "debit": 4800 }, { "account": "Cash", "credit": 4800 }, { "account": "Update Average Cost.", "isExplanation": true } ] },
        { "date": "Jan 18", "description": "Customer from Jan 8 returned 50 units. (Restocked at cost ₱9.56).", "rows": 5, "solution": [ { "account": "Sales Returns and Allowances", "debit": 1000 }, { "account": "Accounts Receivable", "credit": 1000 }, { "account": "Merchandise Inventory", "debit": 478 }, { "account": "Cost of Goods Sold", "credit": 478 }, { "account": "Returned to inventory at original cost.", "isExplanation": true } ] },
        { "date": "Jan 20", "description": "Collected full amount from Jan 8 customer, less return, no discount.", "rows": 3, "solution": [ { "account": "Cash", "debit": 9000 }, { "account": "Accounts Receivable", "credit": 9000 }, { "account": "Collection.", "isExplanation": true } ] },
        { "date": "Jan 22", "description": "Purchased Supplies ₱500 on account.", "rows": 3, "solution": [ { "account": "Supplies", "debit": 500 }, { "account": "Accounts Payable", "credit": 500 }, { "account": "Supplies.", "isExplanation": true } ] },
        { "date": "Jan 25", "description": "Sold 200 units for cash ₱25 each.", "rows": 5, "solution": [ { "account": "Cash", "debit": 5000 }, { "account": "Sales", "credit": 5000 }, { "account": "Cost of Goods Sold", "debit": 2180 }, { "account": "Merchandise Inventory", "credit": 2180 }, { "account": "COGS calculated on current Avg.", "isExplanation": true } ] },
        { "date": "Jan 28", "description": "Owner withdrew ₱2,000 cash.", "rows": 3, "solution": [ { "account": "Owner's Drawings", "debit": 2000 }, { "account": "Cash", "credit": 2000 }, { "account": "Withdrawal.", "isExplanation": true } ] },
        { "date": "Jan 30", "description": "Paid Salaries ₱1,000.", "rows": 3, "solution": [ { "account": "Salaries Expense", "debit": 1000 }, { "account": "Cash", "credit": 1000 }, { "account": "Expense.", "isExplanation": true } ] },
        { "date": "Jan 31", "description": "Purchased 100 units at ₱13 each.", "rows": 3, "solution": [ { "account": "Merchandise Inventory", "debit": 1300 }, { "account": "Accounts Payable", "credit": 1300 }, { "account": "Update moving average.", "isExplanation": true } ] }
      ],
      "type": "Journalizing"
    }
  },
{
    "FABM1-Merch-Practice-Period-FIFO-001": {
      "id": "set1_periodic_fifo",
      "instructions": "Journalize the transactions using Periodic Inventory System and FIFO Costing. Use the following accounts: Accounts Payable, Accounts Receivable, Cash, Purchases, Purchase Returns and Allowances, Freight In, Sales, Sales Returns and Allowances, Sales Discounts, Freight Out, Supplies, Owner's Capital, Owner's Drawings, Salaries Expense, Purchase Discounts.",
      "subject": "FABM1",
      "title": "Set 1: FIFO Costing (Periodic)",
      "topic": "Journalizing - Sample Merchandising Business",
      "transactions": [
        { "date": "Jan 1", "description": "Owner invested ₱50,000 cash.", "rows": 3, "solution": [ { "account": "Cash", "debit": 50000 }, { "account": "Owner's Capital", "credit": 50000 }, { "account": "Initial investment.", "isExplanation": true } ] },
        { "date": "Jan 2", "description": "Purchased 1,000 units at list price ₱10 each, less 10% trade discount. Terms 2/10, n/30.", "rows": 3, "solution": [ { "account": "Purchases", "debit": 9000 }, { "account": "Accounts Payable", "credit": 9000 }, { "account": "1000 units @ ₱9 (net).", "isExplanation": true } ] },
        { "date": "Jan 3", "description": "Paid freight on Jan 2 purchase, ₱500 cash.", "rows": 3, "solution": [ { "account": "Freight In", "debit": 500 }, { "account": "Cash", "credit": 500 }, { "account": "Paid freight on purchase.", "isExplanation": true } ] },
        { "date": "Jan 5", "description": "Returned 100 defective units to supplier.", "rows": 3, "solution": [ { "account": "Accounts Payable", "debit": 900 }, { "account": "Purchase Returns and Allowances", "credit": 900 }, { "account": "Returned goods to supplier.", "isExplanation": true } ] },
        { "date": "Jan 8", "description": "Sold 500 units on account for ₱20 each.", "rows": 3, "solution": [ { "account": "Accounts Receivable", "debit": 10000 }, { "account": "Sales", "credit": 10000 }, { "account": "Sold goods on account.", "isExplanation": true } ] },
        { "date": "Jan 10", "description": "Paid freight out on Jan 8 sale, ₱200.", "rows": 3, "solution": [ { "account": "Freight Out", "debit": 200 }, { "account": "Cash", "credit": 200 }, { "account": "Paid shipping to customer.", "isExplanation": true } ] },
        { "date": "Jan 12", "description": "Paid supplier for Jan 2 purchase in full, less return, within discount period.", "rows": 4, "solution": [ { "account": "Accounts Payable", "debit": 8100 }, { "account": "Purchase Discounts", "credit": 162 }, { "account": "Cash", "credit": 7938 }, { "account": "Paid within discount period.", "isExplanation": true } ] },
        { "date": "Jan 15", "description": "Purchased 400 units at ₱12 each cash.", "rows": 3, "solution": [ { "account": "Purchases", "debit": 4800 }, { "account": "Cash", "credit": 4800 }, { "account": "Cash purchase.", "isExplanation": true } ] },
        { "date": "Jan 18", "description": "Customer from Jan 8 returned 50 units.", "rows": 3, "solution": [ { "account": "Sales Returns and Allowances", "debit": 1000 }, { "account": "Accounts Receivable", "credit": 1000 }, { "account": "Customer return.", "isExplanation": true } ] },
        { "date": "Jan 20", "description": "Collected full amount from Jan 8 customer, less return, no discount.", "rows": 3, "solution": [ { "account": "Cash", "debit": 9000 }, { "account": "Accounts Receivable", "credit": 9000 }, { "account": "Collection.", "isExplanation": true } ] },
        { "date": "Jan 22", "description": "Purchased Supplies ₱500 on account.", "rows": 3, "solution": [ { "account": "Supplies", "debit": 500 }, { "account": "Accounts Payable", "credit": 500 }, { "account": "Supplies.", "isExplanation": true } ] },
        { "date": "Jan 25", "description": "Sold 200 units for cash ₱25 each.", "rows": 3, "solution": [ { "account": "Cash", "debit": 5000 }, { "account": "Sales", "credit": 5000 }, { "account": "Cash sale.", "isExplanation": true } ] },
        { "date": "Jan 28", "description": "Owner withdrew ₱2,000 cash.", "rows": 3, "solution": [ { "account": "Owner's Drawings", "debit": 2000 }, { "account": "Cash", "credit": 2000 }, { "account": "Withdrawal.", "isExplanation": true } ] },
        { "date": "Jan 30", "description": "Paid Salaries ₱1,000.", "rows": 3, "solution": [ { "account": "Salaries Expense", "debit": 1000 }, { "account": "Cash", "credit": 1000 }, { "account": "Expense.", "isExplanation": true } ] },
        { "date": "Jan 31", "description": "Purchased 100 units at ₱13 each.", "rows": 3, "solution": [ { "account": "Purchases", "debit": 1300 }, { "account": "Accounts Payable", "credit": 1300 }, { "account": "Purchased 100 units.", "isExplanation": true } ] }
      ],
      "type": "Journalizing"
    }
  },
  {
    "FABM1-Merch-Practice-Perpe-FIFO-001": {
      "id": "set1_perpetual_fifo",
      "instructions": "Journalize the transactions using Perpetual Inventory System and FIFO Costing. Use the following accounts: Accounts Payable, Accounts Receivable, Cash, Cost of Goods Sold, Merchandise Inventory, Sales, Sales Returns and Allowances, Sales Discounts, Freight Out, Supplies, Owner's Capital, Owner's Drawings, Salaries Expense.",
      "subject": "FABM1",
      "title": "Set 1: FIFO Costing (Perpetual)",
      "topic": "Journalizing - Sample Merchandising Business",
      "transactions": [
        { "date": "Jan 1", "description": "Owner invested ₱50,000 cash.", "rows": 3, "solution": [ { "account": "Cash", "debit": 50000 }, { "account": "Owner's Capital", "credit": 50000 }, { "account": "Initial investment.", "isExplanation": true } ] },
        { "date": "Jan 2", "description": "Purchased 1,000 units at list price ₱10 each, less 10% trade discount. Terms 2/10, n/30.", "rows": 3, "solution": [ { "account": "Merchandise Inventory", "debit": 9000 }, { "account": "Accounts Payable", "credit": 9000 }, { "account": "1000 units @ ₱9.", "isExplanation": true } ] },
        { "date": "Jan 3", "description": "Paid freight on Jan 2 purchase, ₱500 cash.", "rows": 3, "solution": [ { "account": "Merchandise Inventory", "debit": 500 }, { "account": "Cash", "credit": 500 }, { "account": "Freight added to inventory.", "isExplanation": true } ] },
        { "date": "Jan 5", "description": "Returned 100 defective units to supplier.", "rows": 3, "solution": [ { "account": "Accounts Payable", "debit": 900 }, { "account": "Merchandise Inventory", "credit": 900 }, { "account": "Return reduces inventory.", "isExplanation": true } ] },
        { "date": "Jan 8", "description": "Sold 500 units on account for ₱20 each.", "rows": 5, "solution": [ { "account": "Accounts Receivable", "debit": 10000 }, { "account": "Sales", "credit": 10000 }, { "account": "Cost of Goods Sold", "debit": 4780 }, { "account": "Merchandise Inventory", "credit": 4780 }, { "account": "COGS: 500 units @ ~9.56.", "isExplanation": true } ] },
        { "date": "Jan 10", "description": "Paid freight out on Jan 8 sale, ₱200.", "rows": 3, "solution": [ { "account": "Freight Out", "debit": 200 }, { "account": "Cash", "credit": 200 }, { "account": "Paid shipping to customer.", "isExplanation": true } ] },
        { "date": "Jan 12", "description": "Paid supplier for Jan 2 purchase in full, less return, within discount period. (Bal ₱8100 * .98)", "rows": 3, "solution": [ { "account": "Accounts Payable", "debit": 8100 }, { "account": "Merchandise Inventory", "credit": 162 }, { "account": "Cash", "credit": 7938 }, { "account": "Discount reduces inventory.", "isExplanation": true } ] },
        { "date": "Jan 15", "description": "Purchased 400 units at ₱12 each cash.", "rows": 3, "solution": [ { "account": "Merchandise Inventory", "debit": 4800 }, { "account": "Cash", "credit": 4800 }, { "account": "Cash purchase.", "isExplanation": true } ] },
        { "date": "Jan 18", "description": "Customer from Jan 8 returned 50 units. (Restocked at original cost ₱9.56).", "rows": 5, "solution": [ { "account": "Sales Returns and Allowances", "debit": 1000 }, { "account": "Accounts Receivable", "credit": 1000 }, { "account": "Merchandise Inventory", "debit": 478 }, { "account": "Cost of Goods Sold", "credit": 478 }, { "account": "Returned to inventory.", "isExplanation": true } ] },
        { "date": "Jan 20", "description": "Collected full amount from Jan 8 customer, less return, no discount.", "rows": 3, "solution": [ { "account": "Cash", "debit": 9000 }, { "account": "Accounts Receivable", "credit": 9000 }, { "account": "Collection.", "isExplanation": true } ] },
        { "date": "Jan 22", "description": "Purchased Supplies ₱500 on account.", "rows": 3, "solution": [ { "account": "Supplies", "debit": 500 }, { "account": "Accounts Payable", "credit": 500 }, { "account": "Supplies.", "isExplanation": true } ] },
        { "date": "Jan 25", "description": "Sold 200 units for cash ₱25 each.", "rows": 5, "solution": [ { "account": "Cash", "debit": 5000 }, { "account": "Sales", "credit": 5000 }, { "account": "Cost of Goods Sold", "debit": 1831 }, { "account": "Merchandise Inventory", "credit": 1831 }, { "account": "FIFO COGS: 200 @ ~9.155.", "isExplanation": true } ] },
        { "date": "Jan 28", "description": "Owner withdrew ₱2,000 cash.", "rows": 3, "solution": [ { "account": "Owner's Drawings", "debit": 2000 }, { "account": "Cash", "credit": 2000 }, { "account": "Withdrawal.", "isExplanation": true } ] },
        { "date": "Jan 30", "description": "Paid Salaries ₱1,000.", "rows": 3, "solution": [ { "account": "Salaries Expense", "debit": 1000 }, { "account": "Cash", "credit": 1000 }, { "account": "Expense.", "isExplanation": true } ] },
        { "date": "Jan 31", "description": "Purchased 100 units at ₱13 each.", "rows": 3, "solution": [ { "account": "Merchandise Inventory", "debit": 1300 }, { "account": "Accounts Payable", "credit": 1300 }, { "account": "Purchase.", "isExplanation": true } ] }
      ],
      "type": "Journalizing"
    }
  }
];
