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
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  AlertCircle,
  Bot,
  BrainCircuit,
  Check,
  ChevronRight,
  Languages,
  MessageCircle,
  MessageSquare,
  RotateCcw,
  Save,
  Settings,
  Sparkles,
  Wand2,
} from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import geminiClient from "@/lib/gemini";

const WhatsAppBot = () => {
  const [activeTab, setActiveTab] = useState("configuration");
  const [botEnabled, setBotEnabled] = useState(true);
  const [apiStatus, setApiStatus] = useState<
    "idle" | "testing" | "success" | "error"
  >("idle");
  const [testMessage, setTestMessage] = useState(
    "Hello, I'd like to order a pizza",
  );
  const [testResponse, setTestResponse] = useState("");
  const [systemPrompt, setSystemPrompt] = useState(
    "You are a helpful WhatsApp business assistant for a restaurant. Help customers with their orders, answer questions about the menu, and provide information about business hours and location. Be friendly, concise, and helpful.",
  );

  const testGeminiAPI = async () => {
    setApiStatus("testing");
    setTestResponse("");

    try {
      const response = await geminiClient.generateResponse([
        {
          role: "user",
          content: `${systemPrompt}\n\nCustomer message: ${testMessage}`,
        },
      ]);

      setTestResponse(response.text);
      setApiStatus("success");
    } catch (error) {
      console.error("Error testing Gemini API:", error);
      setTestResponse(
        "Error: Failed to get response from Gemini API. Please check your API key and try again.",
      );
      setApiStatus("error");
    }
  };

  return (
    <div className="container mx-auto p-6 bg-background">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold">WhatsApp Bot</h1>
          <p className="text-muted-foreground">
            Configure your AI-powered WhatsApp chatbot
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <Switch
              id="bot-status"
              checked={botEnabled}
              onCheckedChange={setBotEnabled}
            />
            <Label htmlFor="bot-status">
              {botEnabled ? (
                <span className="text-green-500 font-medium">Bot Active</span>
              ) : (
                <span className="text-muted-foreground">Bot Inactive</span>
              )}
            </Label>
          </div>
          <Button>
            <Save className="mr-2 h-4 w-4" />
            Save Configuration
          </Button>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid grid-cols-3 w-[400px] mb-6">
          <TabsTrigger value="configuration">
            <Settings className="mr-2 h-4 w-4" />
            Configuration
          </TabsTrigger>
          <TabsTrigger value="testing">
            <MessageSquare className="mr-2 h-4 w-4" />
            Testing
          </TabsTrigger>
          <TabsTrigger value="languages">
            <Languages className="mr-2 h-4 w-4" />
            Languages
          </TabsTrigger>
        </TabsList>

        <TabsContent value="configuration" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <BrainCircuit className="mr-2 h-5 w-5 text-primary" />
                Gemini API Configuration
              </CardTitle>
              <CardDescription>
                Configure the Gemini AI model for your WhatsApp bot
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="api-key">API Key</Label>
                <div className="flex space-x-2">
                  <Input
                    id="api-key"
                    type="password"
                    value="AIzaSyDKV-jHT95A41knwC_qTFriHu6q3rbuK3A"
                    readOnly
                    className="font-mono"
                  />
                  <Button variant="outline" size="icon">
                    <Settings className="h-4 w-4" />
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground">
                  Your Gemini API key is securely stored and used for AI
                  responses
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="system-prompt">System Prompt</Label>
                <Textarea
                  id="system-prompt"
                  value={systemPrompt}
                  onChange={(e) => setSystemPrompt(e.target.value)}
                  rows={6}
                  className="resize-none"
                />
                <p className="text-xs text-muted-foreground">
                  This prompt guides the AI on how to respond to customer
                  messages
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="model">Model</Label>
                  <div className="flex items-center space-x-2 rounded-md border p-2">
                    <Sparkles className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium">gemini-pro</span>
                    <Badge className="ml-auto">Default</Badge>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="temperature">Temperature</Label>
                  <div className="flex items-center space-x-2 rounded-md border p-2">
                    <span className="text-sm font-medium">0.8</span>
                    <span className="text-xs text-muted-foreground ml-auto">
                      Higher = more creative, Lower = more precise
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">
                <Save className="mr-2 h-4 w-4" />
                Save API Configuration
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Bot className="mr-2 h-5 w-5 text-primary" />
                Bot Behavior
              </CardTitle>
              <CardDescription>
                Configure how your bot interacts with customers
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">Auto-Reply to Messages</h3>
                  <p className="text-sm text-muted-foreground">
                    Automatically respond to incoming messages
                  </p>
                </div>
                <Switch defaultChecked id="auto-reply" />
              </div>

              <Separator />

              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">Human Handoff</h3>
                  <p className="text-sm text-muted-foreground">
                    Transfer to human agent when bot can't help
                  </p>
                </div>
                <Switch defaultChecked id="human-handoff" />
              </div>

              <Separator />

              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">Order Processing</h3>
                  <p className="text-sm text-muted-foreground">
                    Allow bot to process and confirm orders
                  </p>
                </div>
                <Switch defaultChecked id="order-processing" />
              </div>

              <Separator />

              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">Payment Collection</h3>
                  <p className="text-sm text-muted-foreground">
                    Allow bot to send payment links and process payments
                  </p>
                </div>
                <Switch defaultChecked id="payment-collection" />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="testing" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <MessageCircle className="mr-2 h-5 w-5 text-primary" />
                Test Your Bot
              </CardTitle>
              <CardDescription>
                Send test messages to see how your bot responds
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="test-message">Test Message</Label>
                <Textarea
                  id="test-message"
                  value={testMessage}
                  onChange={(e) => setTestMessage(e.target.value)}
                  placeholder="Enter a test message here..."
                  rows={3}
                />
              </div>

              <Button
                onClick={testGeminiAPI}
                disabled={apiStatus === "testing"}
                className="w-full"
              >
                {apiStatus === "testing" ? (
                  <>
                    <RotateCcw className="mr-2 h-4 w-4 animate-spin" />
                    Testing...
                  </>
                ) : (
                  <>
                    <Wand2 className="mr-2 h-4 w-4" />
                    Test Bot Response
                  </>
                )}
              </Button>

              {testResponse && (
                <div className="mt-4 space-y-2">
                  <Label>Bot Response</Label>
                  <div className="rounded-md border p-4 bg-muted/50">
                    <div className="flex items-start">
                      <Bot className="h-5 w-5 mr-2 mt-0.5 text-primary" />
                      <div className="space-y-1">
                        <p className="text-sm font-medium">WhatsApp Bot</p>
                        <p className="text-sm">{testResponse}</p>
                      </div>
                    </div>
                  </div>
                  {apiStatus === "success" && (
                    <div className="flex items-center text-xs text-green-500">
                      <Check className="h-3 w-3 mr-1" />
                      Successfully generated response using Gemini API
                    </div>
                  )}
                  {apiStatus === "error" && (
                    <div className="flex items-center text-xs text-red-500">
                      <AlertCircle className="h-3 w-3 mr-1" />
                      Error connecting to Gemini API
                    </div>
                  )}
                </div>
              )}
            </CardContent>
          </Card>

          <Alert>
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Testing Mode</AlertTitle>
            <AlertDescription>
              Test responses are generated using your current configuration but
              won't be sent to actual customers. This is just for testing
              purposes.
            </AlertDescription>
          </Alert>
        </TabsContent>

        <TabsContent value="languages" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Languages className="mr-2 h-5 w-5 text-primary" />
                Language Settings
              </CardTitle>
              <CardDescription>
                Configure multilingual support for your WhatsApp bot
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Primary Language</Label>
                <div className="flex items-center space-x-2 rounded-md border p-2">
                  <span className="text-sm font-medium">English</span>
                  <Badge className="ml-auto">Default</Badge>
                </div>
              </div>

              <div className="space-y-2">
                <Label>Supported Languages</Label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {[
                    { name: "English", enabled: true },
                    { name: "Hindi", enabled: true },
                    { name: "Tamil", enabled: true },
                    { name: "Telugu", enabled: false },
                    { name: "Marathi", enabled: false },
                    { name: "Bengali", enabled: false },
                    { name: "Gujarati", enabled: false },
                    { name: "Kannada", enabled: false },
                  ].map((language) => (
                    <div
                      key={language.name}
                      className={`flex items-center justify-between rounded-md border p-2 ${language.enabled ? "border-primary/50 bg-primary/5" : ""}`}
                    >
                      <span className="text-sm">{language.name}</span>
                      <Switch checked={language.enabled} />
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">Auto-Detect Language</h3>
                  <p className="text-sm text-muted-foreground">
                    Automatically detect and respond in customer's language
                  </p>
                </div>
                <Switch defaultChecked id="auto-detect" />
              </div>

              <div className="space-y-2">
                <Label>Translation Quality</Label>
                <div className="flex items-center space-x-2 rounded-md border p-2">
                  <span className="text-sm font-medium">High</span>
                  <span className="text-xs text-muted-foreground ml-auto">
                    Uses Gemini's advanced translation capabilities
                  </span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">
                <Save className="mr-2 h-4 w-4" />
                Save Language Settings
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default WhatsAppBot;
