import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import {
  CheckCircle,
  AlertCircle,
  Smartphone,
  QrCode,
  Link,
  RefreshCw,
  Copy,
  ArrowRight,
} from "lucide-react";

interface WhatsAppSetupProps {
  businessName?: string;
  phoneNumber?: string;
  connectionStatus?: "disconnected" | "connecting" | "connected" | "failed";
  webhookUrl?: string;
}

const WhatsAppSetup = ({
  businessName = "Your Business",
  phoneNumber = "",
  connectionStatus = "disconnected",
  webhookUrl = "https://api.yourdomain.com/whatsapp/webhook",
}: WhatsAppSetupProps) => {
  const [activeTab, setActiveTab] = useState("connect");
  const [verificationStep, setVerificationStep] = useState(1);
  const [verificationCode, setVerificationCode] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleConnect = () => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setVerificationStep(2);
    }, 2000);
  };

  const handleVerify = () => {
    setIsLoading(true);
    // Simulate verification
    setTimeout(() => {
      setIsLoading(false);
      setVerificationStep(3);
    }, 2000);
  };

  const getStatusBadge = () => {
    switch (connectionStatus) {
      case "connected":
        return <Badge className="bg-green-500">Connected</Badge>;
      case "connecting":
        return <Badge className="bg-yellow-500">Connecting</Badge>;
      case "failed":
        return <Badge className="bg-red-500">Failed</Badge>;
      default:
        return <Badge className="bg-slate-500">Disconnected</Badge>;
    }
  };

  return (
    <div className="w-full p-6 bg-white">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold">WhatsApp Business Setup</h1>
          <p className="text-muted-foreground">
            Connect your WhatsApp Business account to start automating customer
            interactions
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium">Status:</span>
          {getStatusBadge()}
        </div>
      </div>

      <Tabs
        defaultValue="connect"
        value={activeTab}
        onValueChange={setActiveTab}
        className="w-full"
      >
        <TabsList className="grid grid-cols-3 w-full max-w-2xl mb-6">
          <TabsTrigger value="connect">1. Connect Account</TabsTrigger>
          <TabsTrigger value="verify" disabled={verificationStep < 2}>
            2. Verify Number
          </TabsTrigger>
          <TabsTrigger value="webhook" disabled={verificationStep < 3}>
            3. Setup Webhook
          </TabsTrigger>
        </TabsList>

        <TabsContent value="connect" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Connect WhatsApp Business Account</CardTitle>
              <CardDescription>
                Enter your business details to connect your WhatsApp Business
                account
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="businessName">Business Name</Label>
                  <Input
                    id="businessName"
                    defaultValue={businessName}
                    placeholder="Enter your business name"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phoneNumber">
                    WhatsApp Business Phone Number
                  </Label>
                  <Input
                    id="phoneNumber"
                    defaultValue={phoneNumber}
                    placeholder="+91XXXXXXXXXX"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="industry">Industry</Label>
                  <Input
                    id="industry"
                    placeholder="e.g. Restaurant, Retail, Services"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Business Email</Label>
                  <Input id="email" type="email" placeholder="your@email.com" />
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={handleConnect} disabled={isLoading}>
                {isLoading ? (
                  <>
                    <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                    Connecting...
                  </>
                ) : (
                  <>
                    Connect WhatsApp <ArrowRight className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </CardFooter>
          </Card>

          <Alert>
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Important</AlertTitle>
            <AlertDescription>
              Make sure your phone number is registered with WhatsApp Business
              and not a personal WhatsApp account.
            </AlertDescription>
          </Alert>
        </TabsContent>

        <TabsContent value="verify" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Verify Your WhatsApp Number</CardTitle>
              <CardDescription>
                Complete the verification process to connect your WhatsApp
                Business account
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex flex-col items-center justify-center p-6 border rounded-lg bg-slate-50">
                <QrCode className="h-48 w-48 mb-4 text-primary" />
                <p className="text-center text-sm text-muted-foreground mb-2">
                  Scan this QR code with your WhatsApp Business app to verify
                  your account
                </p>
                <p className="text-center text-xs text-muted-foreground">
                  QR code expires in 10:00 minutes
                </p>
              </div>

              <Separator className="my-4" />

              <div className="space-y-2">
                <Label htmlFor="verificationCode">
                  Or enter verification code
                </Label>
                <div className="flex gap-2">
                  <Input
                    id="verificationCode"
                    value={verificationCode}
                    onChange={(e) => setVerificationCode(e.target.value)}
                    placeholder="Enter the 6-digit code"
                  />
                  <Button variant="outline" size="icon">
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground">
                  You'll receive a verification code on your WhatsApp Business
                  app
                </p>
              </div>
            </CardContent>
            <CardFooter>
              <Button
                onClick={handleVerify}
                disabled={isLoading || verificationCode.length < 6}
              >
                {isLoading ? (
                  <>
                    <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                    Verifying...
                  </>
                ) : (
                  <>
                    Verify Number <ArrowRight className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </CardFooter>
          </Card>

          <Alert>
            <Smartphone className="h-4 w-4" />
            <AlertTitle>Need help?</AlertTitle>
            <AlertDescription>
              If you're having trouble with verification, make sure your
              WhatsApp Business app is updated to the latest version.
            </AlertDescription>
          </Alert>
        </TabsContent>

        <TabsContent value="webhook" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Configure Webhook</CardTitle>
              <CardDescription>
                Set up webhook to receive messages from your customers
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="webhookUrl">Webhook URL</Label>
                <div className="flex gap-2">
                  <Input id="webhookUrl" defaultValue={webhookUrl} readOnly />
                  <Button variant="outline" size="icon">
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground">
                  This is the URL where WhatsApp will send incoming message
                  notifications
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <Label>Webhook Configuration</Label>
                  <Badge
                    variant="outline"
                    className="text-green-500 border-green-500"
                  >
                    <CheckCircle className="h-3 w-3 mr-1" /> Verified
                  </Badge>
                </div>
                <div className="border rounded-lg p-4 space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Text Messages</span>
                    <CheckCircle className="h-4 w-4 text-green-500" />
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Media Messages</span>
                    <CheckCircle className="h-4 w-4 text-green-500" />
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Location Messages</span>
                    <CheckCircle className="h-4 w-4 text-green-500" />
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Message Status Updates</span>
                    <CheckCircle className="h-4 w-4 text-green-500" />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label>Webhook Health</Label>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Last Ping</span>
                    <span className="text-sm text-muted-foreground">
                      2 minutes ago
                    </span>
                  </div>
                  <div className="space-y-1">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Uptime</span>
                      <span className="text-sm text-muted-foreground">
                        99.8%
                      </span>
                    </div>
                    <Progress value={99.8} className="h-2" />
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">
                <RefreshCw className="mr-2 h-4 w-4" />
                Test Webhook
              </Button>
              <Button>
                <Link className="mr-2 h-4 w-4" />
                Complete Setup
              </Button>
            </CardFooter>
          </Card>

          <Alert className="bg-green-50 border-green-200">
            <CheckCircle className="h-4 w-4 text-green-500" />
            <AlertTitle className="text-green-700">Setup Complete!</AlertTitle>
            <AlertDescription className="text-green-600">
              Your WhatsApp Business account is now connected and ready to use.
              You can now configure your AI chatbot.
            </AlertDescription>
          </Alert>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default WhatsAppSetup;
