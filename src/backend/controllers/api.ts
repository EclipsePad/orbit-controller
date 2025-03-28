import { Request, Response } from "express";
import {
  getAverageEntryPrice as _getAverageEntryPrice,
  getProfit as _getProfit,
  updateUserAssets as _updateUserAssets,
} from "../middleware/api";

export async function getAverageEntryPrice(req: Request, res: Response) {
  const address = req.query.address as string;
  const from = parseInt(req.query.from as string);
  const to = parseInt(req.query.to as string);

  if (!address) {
    res.status(400).json({ error: "Address parameter is required" });
  }

  if (isNaN(from) || isNaN(to)) {
    res
      .status(400)
      .json({ error: "Valid 'from' and 'to' parameters are required" });
  }

  const data = await _getAverageEntryPrice(address, from, to);
  res.status(200).json(data);
}

export async function getProfit(req: Request, res: Response) {
  const address = req.query.address as string;
  const from = parseInt(req.query.from as string);
  const to = parseInt(req.query.to as string);

  if (!address) {
    res.status(400).json({ error: "Address parameter is required" });
  }

  if (isNaN(from) || isNaN(to)) {
    res
      .status(400)
      .json({ error: "Valid 'from' and 'to' parameters are required" });
  }

  const data = await _getProfit(address, from, to);
  res.status(200).json(data);
}

export async function updateUserAssets(req: Request, res: Response) {
  const address = req.body.address as string;

  if (!address) {
    res.status(400).json({ error: "Address parameter is required" });
  }

  const data = await _updateUserAssets(address);
  res.status(200).json(data);
}
