"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";

export default function CartTotals() {
  const [subtotal] = useState(29.0);
  const [total, setTotal] = useState(29.0);

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>CART TOTALS</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex justify-between items-center">
          <span className="font-medium">Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>

        <div className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Enter your address to view shipping options.
          </p>

          <Select defaultValue="US">
            <SelectTrigger>
              <SelectValue placeholder="Select country" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="US">United States (US)</SelectItem>
            </SelectContent>
          </Select>

          <Select defaultValue="CA">
            <SelectTrigger>
              <SelectValue placeholder="Select state" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="CA">California</SelectItem>
            </SelectContent>
          </Select>

          <Input placeholder="Town / City" />
          <Input placeholder="ZIP Code" />

          <Button
            variant="outline"
            className="w-full"
            onClick={() => setTotal(subtotal)}
          >
            UPDATE TOTALS
          </Button>
        </div>

        <div className="flex justify-between items-center pt-4 border-t">
          <span className="font-medium">Total</span>
          <span className="font-bold">${total.toFixed(2)}</span>
        </div>

        <Button className="w-full bg-zinc-900 hover:bg-zinc-800">
          PROCEED TO CHECKOUT →
        </Button>
      </CardContent>
    </Card>
  );
}
