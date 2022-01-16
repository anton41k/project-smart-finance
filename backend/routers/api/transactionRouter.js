const express = require('express');
const router = express.Router();

const { TransactionController } = require('../../contollers');
const { asyncWrapper } = require('../../helpers');
const {
  addTransctionValidation,
} = require('../../middlewares/validationMiddlewares');

router.get(
  '/:year/:month/:type',
  asyncWrapper(TransactionController.getMonthTransactions),
);

router.get(
  '/:year/:month/:type/sum',
  asyncWrapper(TransactionController.getMonthTransactionsSum),
);

router.post(
  '/:type',
  // addTransactionValidation,
  asyncWrapper(TransactionController.addTransaction),
);

module.exports = router;
