"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import QRScanner from "@/components/QRScanner";
import { STIForm } from "@/components/STIForm";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container py-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="p-6">
            <h1 className="text-3xl font-bold mb-6">STI Status Tracker</h1>
            <p className="text-muted-foreground mb-6">
              Generate or scan QR codes to share your STI status securely. All
              data is stored locally and not transmitted to any server.
            </p>

            <Tabs defaultValue="generate" className="space-y-4">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="generate">Generate Status</TabsTrigger>
                <TabsTrigger value="scan">Scan Status</TabsTrigger>
              </TabsList>
              <TabsContent value="generate" className="space-y-4">
                <STIForm />
              </TabsContent>
              <TabsContent value="scan" className="space-y-4">
                <QRScanner />
              </TabsContent>
            </Tabs>
          </Card>
        </motion.div>
      </main>
    </div>
  );
}
