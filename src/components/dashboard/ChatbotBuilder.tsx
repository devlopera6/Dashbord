import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Check,
  Globe,
  Languages,
  MessageSquare,
  Play,
  Plus,
  Save,
  Settings,
  Sparkles,
  X,
} from "lucide-react";

const ChatbotBuilder = () => {
  const [activeTab, setActiveTab] = useState("languages");
  const [previewMessage, setPreviewMessage] = useState(
    "Hello! How can I help you today?",
  );
  const [previewResponse, setPreviewResponse] = useState(
    "I can help you place an order, check order status, or answer questions about our products.",
  );

  // Mock data for templates
  const [templates, setTemplates] = useState([
    {
      id: 1,
      name: "Greeting",
      content:
        "Hello! Welcome to {{business_name}}. How can I assist you today?",
    },
    {
      id: 2,
      name: "Order Confirmation",
      content:
        "Thank you for your order! Your order #{{order_id}} has been confirmed.",
    },
    {
      id: 3,
      name: "Payment Request",
      content:
        "Please complete your payment of ₹{{amount}} using this link: {{payment_link}}",
    },
  ]);

  // Mock data for intents
  const [intents, setIntents] = useState([
    {
      id: 1,
      name: "Order Food",
      examples: ["I want to order food", "Can I place an order", "Menu please"],
    },
    {
      id: 2,
      name: "Check Status",
      examples: ["Where is my order", "Order status", "Is my order ready"],
    },
    {
      id: 3,
      name: "Payment Help",
      examples: ["How do I pay", "Payment options", "Is UPI available"],
    },
  ]);

  return (
    <div className="container mx-auto p-6 bg-background">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold">Chatbot Builder</h1>
          <p className="text-muted-foreground">
            Configure your AI chatbot to handle customer conversations
          </p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline">Preview</Button>
          <Button>Save Changes</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <TabsList className="grid grid-cols-4 mb-6">
              <TabsTrigger value="languages">
                <Languages className="mr-2 h-4 w-4" />
                Languages
              </TabsTrigger>
              <TabsTrigger value="templates">
                <MessageSquare className="mr-2 h-4 w-4" />
                Response Templates
              </TabsTrigger>
              <TabsTrigger value="flows">
                <Settings className="mr-2 h-4 w-4" />
                Conversation Flows
              </TabsTrigger>
              <TabsTrigger value="intents">
                <Sparkles className="mr-2 h-4 w-4" />
                Intent Recognition
              </TabsTrigger>
            </TabsList>

            <TabsContent value="languages" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Language Settings</CardTitle>
                  <CardDescription>
                    Select the languages your chatbot will support. Your primary
                    language will be used as the default.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="primary-language">Primary Language</Label>
                    <Select defaultValue="en">
                      <SelectTrigger id="primary-language">
                        <SelectValue placeholder="Select primary language" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="en">English</SelectItem>
                        <SelectItem value="hi">Hindi</SelectItem>
                        <SelectItem value="ta">Tamil</SelectItem>
                        <SelectItem value="te">Telugu</SelectItem>
                        <SelectItem value="mr">Marathi</SelectItem>
                        <SelectItem value="bn">Bengali</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Additional Languages</Label>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center space-x-2">
                        <Switch id="lang-hindi" />
                        <Label htmlFor="lang-hindi">Hindi</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Switch id="lang-tamil" />
                        <Label htmlFor="lang-tamil">Tamil</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Switch id="lang-telugu" />
                        <Label htmlFor="lang-telugu">Telugu</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Switch id="lang-marathi" />
                        <Label htmlFor="lang-marathi">Marathi</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Switch id="lang-bengali" />
                        <Label htmlFor="lang-bengali">Bengali</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Switch id="lang-gujarati" />
                        <Label htmlFor="lang-gujarati">Gujarati</Label>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="language-detection">
                      Language Detection
                    </Label>
                    <div className="flex items-center space-x-2">
                      <Switch id="language-detection" defaultChecked />
                      <Label htmlFor="language-detection">
                        Automatically detect customer language
                      </Label>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      When enabled, the chatbot will automatically detect the
                      language used by the customer and respond in the same
                      language.
                    </p>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button>Save Language Settings</Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="templates" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Response Templates</CardTitle>
                  <CardDescription>
                    Create reusable message templates for common responses. Use{" "}
                    {"{{ variables }}"} for dynamic content.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-end mb-4">
                    <Button size="sm">
                      <Plus className="mr-2 h-4 w-4" /> Add Template
                    </Button>
                  </div>
                  <ScrollArea className="h-[400px] pr-4">
                    <div className="space-y-4">
                      {templates.map((template) => (
                        <Card key={template.id}>
                          <CardHeader className="py-3">
                            <div className="flex justify-between items-center">
                              <CardTitle className="text-lg">
                                {template.name}
                              </CardTitle>
                              <div className="flex space-x-2">
                                <Button variant="ghost" size="sm">
                                  <Settings className="h-4 w-4" />
                                </Button>
                                <Button variant="ghost" size="sm">
                                  <X className="h-4 w-4" />
                                </Button>
                              </div>
                            </div>
                          </CardHeader>
                          <CardContent className="py-2">
                            <Textarea
                              value={template.content}
                              className="min-h-[80px]"
                              onChange={(e) => {
                                const updatedTemplates = templates.map((t) =>
                                  t.id === template.id
                                    ? { ...t, content: e.target.value }
                                    : t,
                                );
                                setTemplates(updatedTemplates);
                              }}
                            />
                          </CardContent>
                          <CardFooter className="py-2">
                            <div className="flex space-x-2">
                              <Badge variant="outline">Greeting</Badge>
                              <Badge variant="outline">All Languages</Badge>
                            </div>
                          </CardFooter>
                        </Card>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="flows" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Conversation Flows</CardTitle>
                  <CardDescription>
                    Define how your chatbot should handle different conversation
                    scenarios.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-medium">
                        Order Processing Flow
                      </h3>
                      <Button variant="outline" size="sm">
                        Edit Flow
                      </Button>
                    </div>
                    <div className="bg-muted p-4 rounded-md">
                      <div className="flex items-center space-x-2 mb-2">
                        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
                          1
                        </div>
                        <div className="font-medium">
                          Customer expresses intent to order
                        </div>
                      </div>
                      <div className="ml-10 mb-2 pl-4 border-l-2 border-muted-foreground/20">
                        <div className="text-sm text-muted-foreground">
                          Bot asks for order details
                        </div>
                      </div>
                      <div className="flex items-center space-x-2 mb-2">
                        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
                          2
                        </div>
                        <div className="font-medium">
                          Customer provides order details
                        </div>
                      </div>
                      <div className="ml-10 mb-2 pl-4 border-l-2 border-muted-foreground/20">
                        <div className="text-sm text-muted-foreground">
                          Bot confirms order and provides summary
                        </div>
                      </div>
                      <div className="flex items-center space-x-2 mb-2">
                        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
                          3
                        </div>
                        <div className="font-medium">
                          Bot initiates payment process
                        </div>
                      </div>
                    </div>

                    <Separator className="my-4" />

                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-medium">
                        Support Request Flow
                      </h3>
                      <Button variant="outline" size="sm">
                        Edit Flow
                      </Button>
                    </div>
                    <div className="bg-muted p-4 rounded-md">
                      <div className="flex items-center space-x-2 mb-2">
                        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
                          1
                        </div>
                        <div className="font-medium">
                          Customer asks for support
                        </div>
                      </div>
                      <div className="ml-10 mb-2 pl-4 border-l-2 border-muted-foreground/20">
                        <div className="text-sm text-muted-foreground">
                          Bot asks for order ID or issue description
                        </div>
                      </div>
                      <div className="flex items-center space-x-2 mb-2">
                        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
                          2
                        </div>
                        <div className="font-medium">
                          Customer provides details
                        </div>
                      </div>
                      <div className="ml-10 mb-2 pl-4 border-l-2 border-muted-foreground/20">
                        <div className="text-sm text-muted-foreground">
                          Bot attempts to resolve or escalates to human
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button>
                    <Plus className="mr-2 h-4 w-4" /> Create New Flow
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="intents" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Intent Recognition</CardTitle>
                  <CardDescription>
                    Train your chatbot to recognize different customer intents
                    and respond appropriately.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-end mb-4">
                    <Button size="sm">
                      <Plus className="mr-2 h-4 w-4" /> Add Intent
                    </Button>
                  </div>
                  <ScrollArea className="h-[400px] pr-4">
                    <div className="space-y-4">
                      {intents.map((intent) => (
                        <Card key={intent.id}>
                          <CardHeader className="py-3">
                            <div className="flex justify-between items-center">
                              <CardTitle className="text-lg">
                                {intent.name}
                              </CardTitle>
                              <div className="flex space-x-2">
                                <Button variant="ghost" size="sm">
                                  <Settings className="h-4 w-4" />
                                </Button>
                                <Button variant="ghost" size="sm">
                                  <X className="h-4 w-4" />
                                </Button>
                              </div>
                            </div>
                          </CardHeader>
                          <CardContent className="py-2">
                            <Label className="mb-2 block">
                              Example Phrases
                            </Label>
                            <div className="space-y-2">
                              {intent.examples.map((example, index) => (
                                <div
                                  key={index}
                                  className="flex items-center space-x-2"
                                >
                                  <Input
                                    value={example}
                                    onChange={(e) => {
                                      const updatedExamples = [
                                        ...intent.examples,
                                      ];
                                      updatedExamples[index] = e.target.value;
                                      const updatedIntents = intents.map((i) =>
                                        i.id === intent.id
                                          ? { ...i, examples: updatedExamples }
                                          : i,
                                      );
                                      setIntents(updatedIntents);
                                    }}
                                  />
                                  <Button variant="ghost" size="sm">
                                    <X className="h-4 w-4" />
                                  </Button>
                                </div>
                              ))}
                              <Button
                                variant="outline"
                                size="sm"
                                className="w-full"
                              >
                                <Plus className="mr-2 h-4 w-4" /> Add Example
                              </Button>
                            </div>
                          </CardContent>
                          <CardFooter className="py-2">
                            <div className="flex space-x-2">
                              <Badge variant="outline">Active</Badge>
                              <Badge variant="outline">All Languages</Badge>
                            </div>
                          </CardFooter>
                        </Card>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        <div className="lg:col-span-1">
          <Card className="sticky top-6">
            <CardHeader>
              <CardTitle>Preview</CardTitle>
              <CardDescription>
                See how your chatbot will appear to customers
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-muted rounded-lg p-4 mb-4">
                <div className="flex items-start space-x-2 mb-4">
                  <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white">
                    <Globe className="h-4 w-4" />
                  </div>
                  <div className="flex-1">
                    <div className="bg-background rounded-lg p-3 shadow-sm">
                      <p className="text-sm">{previewMessage}</p>
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">
                      12:05 PM
                    </div>
                  </div>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
                    <MessageSquare className="h-4 w-4" />
                  </div>
                  <div className="flex-1">
                    <div className="bg-primary text-primary-foreground rounded-lg p-3 shadow-sm">
                      <p className="text-sm">{previewResponse}</p>
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">
                      12:06 PM
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="test-message">Test Message</Label>
                  <div className="flex space-x-2 mt-1">
                    <Input
                      id="test-message"
                      placeholder="Type a test message..."
                      value={previewMessage}
                      onChange={(e) => setPreviewMessage(e.target.value)}
                    />
                    <Button variant="outline" size="icon">
                      <Play className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <div>
                  <Label htmlFor="test-language">Test Language</Label>
                  <Select defaultValue="en">
                    <SelectTrigger id="test-language">
                      <SelectValue placeholder="Select language" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="en">English</SelectItem>
                      <SelectItem value="hi">Hindi</SelectItem>
                      <SelectItem value="ta">Tamil</SelectItem>
                      <SelectItem value="te">Telugu</SelectItem>
                      <SelectItem value="mr">Marathi</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="pt-4">
                  <Button className="w-full">
                    <Sparkles className="mr-2 h-4 w-4" /> Generate AI Response
                  </Button>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" size="sm">
                <Save className="mr-2 h-4 w-4" /> Save Test Case
              </Button>
              <Button size="sm">
                <Check className="mr-2 h-4 w-4" /> Apply Changes
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ChatbotBuilder;
