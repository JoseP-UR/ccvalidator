import { Router } from "express";
import { validateCardNumber } from "./logic";

const router = Router();

router.post("/card", (req, res) => {
    const cardNumber = req.body.card_number.replace(/\D/g, "");
  
    return res.json({ isValid: validateCardNumber(cardNumber) });
});

export default router;