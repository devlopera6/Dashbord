import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  MessageSquare,
  Languages,
  Settings,
  Sparkles,
  Save,
  Plus,
  Bot,
  Zap,
  BrainCircuit,
  Variable,
} from "lucide-react";

const WhatsAppBotConfig = () => {
  const [activeTab, setActiveTab] = useState("templates");
  const [templates, setTemplates] = useState([
    {
      id: 1,
      name: "Welcome Message",
      content: "Hello! Welcome to our store. How can I help you today?",
      description: "Sent when a customer messages you for the first time.",
    },
    {
      id: 2,
      name: "Order Confirmation",
      content:
        "Thank you for your order! Your order #{{order_id}} has been confirmed. Total: ₹{{amount}}.",
      description: "Sent when an order is successfully placed.",
    },
    {
      id: 3,
      name: "Payment Reminder",
      content:
        "Reminder: Your order #{{order_id}} is waiting for payment. Click here to pay: {{payment_link}}.",
      description: "Sent when payment is pending for an order.",
    },
    {
      id: 4,
      name: "Out of Stock",
      content:
        "Sorry, {{item_name}} is currently out of stock. Would you like to try {{alternative_item}} instead?",
      description: "Sent when a requested item is out of stock.",
    },
  ]);

  return (
    <div className="container mx-auto p-6 bg-background">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold">WhatsApp Bot Configuration</h1>
          <p className="text-muted-foreground">
            Configure your WhatsApp bot's behavior and message templates
          </p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline">Test Bot</Button>
          <Button>Save Configuration</Button>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid grid-cols-4 mb-6">
          <TabsTrigger value="templates">
            <MessageSquare className="mr-2 h-4 w-4" />
            Message Templates
          </TabsTrigger>
          <TabsTrigger value="language">
            <Languages className="mr-2 h-4 w-4" />
            Language Settings
          </TabsTrigger>
          <TabsTrigger value="ai">
            <BrainCircuit className="mr-2 h-4 w-4" />
            AI Configuration
          </TabsTrigger>
          <TabsTrigger value="automation">
            <Zap className="mr-2 h-4 w-4" />
            Automation
          </TabsTrigger>
        </TabsList>

        <TabsContent value="templates" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Message Templates</CardTitle>
              <CardDescription>
                Customize the messages your WhatsApp bot sends to customers
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-end mb-4">
                <Button>
                  <Plus className="mr-2 h-4 w-4" /> Add Template
                </Button>
              </div>

              {templates.map((template) => (
                <Card key={template.id}>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">{template.name}</CardTitle>
                    <CardDescription>{template.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Textarea
                      value={template.content}
                      className="min-h-[100px]"
                      onChange={(e) => {
                        const updatedTemplates = templates.map((t) =>
                          t.id === template.id
                            ? { ...t, content: e.target.value }
                            : t,
                        );
                        setTemplates(updatedTemplates);
                      }}
                    />
                    <div className="mt-2 text-sm text-muted-foreground flex items-center">
                      <Variable className="h-4 w-4 mr-1" />
                      Use {"{{ variable_name }}"} for dynamic content
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <div className="flex space-x-2">
                      <Badge variant="outline">All Languages</Badge>
                    </div>
                    <Button variant="outline" size="sm">
                      <Save className="mr-2 h-4 w-4" /> Save Changes
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="language" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Language Settings</CardTitle>
              <CardDescription>
                Configure the languages your bot can understand and respond in
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="primary-language">Primary Language</Label>
                  <Select defaultValue="en">
                    <SelectTrigger
                      id="primary-language"
                      className="w-full md:w-1/3"
                    >
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
                  <p className="text-sm text-muted-foreground mt-1">
                    This will be the default language for your bot's responses
                  </p>
                </div>

                <Separator className="my-4" />

                <div>
                  <Label className="mb-2 block">Additional Languages</Label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
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

                <Separator className="my-4" />

                <div>
                  <div className="flex items-center space-x-2">
                    <Switch id="auto-detect" defaultChecked />
                    <Label htmlFor="auto-detect">
                      Automatically detect customer language
                    </Label>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1 ml-7">
                    When enabled, the bot will detect the language used by the
                    customer and respond in the same language
                  </p>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button>
                <Save className="mr-2 h-4 w-4" /> Save Language Settings
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="ai" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>AI Configuration</CardTitle>
              <CardDescription>
                Configure how the AI understands and processes customer messages
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label className="mb-2 block">AI Model</Label>
                <Select defaultValue="standard">
                  <SelectTrigger className="w-full md:w-1/3">
                    <SelectValue placeholder="Select AI model" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="basic">
                      Basic (Faster, less accurate)
                    </SelectItem>
                    <SelectItem value="standard">
                      Standard (Recommended)
                    </SelectItem>
                    <SelectItem value="advanced">
                      Advanced (Slower, more accurate)
                    </SelectItem>
                  </SelectContent>
                </Select>
                <p className="text-sm text-muted-foreground mt-1">
                  Choose the AI model that best fits your needs and budget
                </p>
              </div>

              <Separator className="my-4" />

              <div>
                <Label className="mb-2 block">Order Detection</Label>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Switch id="detect-products" defaultChecked />
                    <Label htmlFor="detect-products">
                      Detect products and quantities
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch id="detect-delivery" defaultChecked />
                    <Label htmlFor="detect-delivery">
                      Detect delivery preferences
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch id="detect-payment" defaultChecked />
                    <Label htmlFor="detect-payment">
                      Detect payment method preferences
                    </Label>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  Configure what information the AI should extract from customer
                  messages
                </p>
              </div>

              <Separator className="my-4" />

              <div>
                <Label className="mb-2 block">Learning & Improvement</Label>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Switch id="continuous-learning" defaultChecked />
                    <Label htmlFor="continuous-learning">
                      Enable continuous learning
                    </Label>
                  </div>
                  <p className="text-sm text-muted-foreground ml-7">
                    Allow the AI to learn from interactions to improve accuracy
                    over time
                  </p>
                  <div className="flex items-center space-x-2">
                    <Switch id="human-feedback" defaultChecked />
                    <Label htmlFor="human-feedback">
                      Collect human feedback
                    </Label>
                  </div>
                  <p className="text-sm text-muted-foreground ml-7">
                    Collect feedback when orders are corrected by humans
                  </p>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button>
                <Sparkles className="mr-2 h-4 w-4" /> Save AI Configuration
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="automation" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Automation Rules</CardTitle>
              <CardDescription>
                Set up automated responses and actions based on triggers
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-end mb-4">
                <Button>
                  <Plus className="mr-2 h-4 w-4" /> Add Automation Rule
                </Button>
              </div>

              <Card>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-lg">Order Follow-up</CardTitle>
                    <Switch defaultChecked />
                  </div>
                  <CardDescription>
                    Send a follow-up message after order delivery
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <Label className="mb-1 block">Trigger</Label>
                      <Select defaultValue="order_delivered">
                        <SelectTrigger>
                          <SelectValue placeholder="Select trigger" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="order_delivered">
                            Order Delivered
                          </SelectItem>
                          <SelectItem value="order_placed">
                            Order Placed
                          </SelectItem>
                          <SelectItem value="payment_received">
                            Payment Received
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label className="mb-1 block">Delay</Label>
                      <div className="flex items-center space-x-2">
                        <Input
                          type="number"
                          defaultValue="30"
                          className="w-20"
                        />
                        <Select defaultValue="minutes">
                          <SelectTrigger className="w-32">
                            <SelectValue placeholder="Select unit" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="minutes">Minutes</SelectItem>
                            <SelectItem value="hours">Hours</SelectItem>
                            <SelectItem value="days">Days</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div>
                      <Label className="mb-1 block">Message</Label>
                      <Textarea
                        defaultValue="Hi {{customer_name}}, we hope you enjoyed your order! Please let us know if everything was satisfactory."
                        className="min-h-[80px]"
                      />
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end">
                  <Button variant="outline">
                    <Save className="mr-2 h-4 w-4" /> Save Rule
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-lg">
                      Abandoned Cart Reminder
                    </CardTitle>
                    <Switch defaultChecked />
                  </div>
                  <CardDescription>
                    Send a reminder when a customer abandons their cart
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <Label className="mb-1 block">Trigger</Label>
                      <Select defaultValue="cart_abandoned">
                        <SelectTrigger>
                          <SelectValue placeholder="Select trigger" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="cart_abandoned">
                            Cart Abandoned
                          </SelectItem>
                          <SelectItem value="order_started">
                            Order Started
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label className="mb-1 block">Delay</Label>
                      <div className="flex items-center space-x-2">
                        <Input
                          type="number"
                          defaultValue="1"
                          className="w-20"
                        />
                        <Select defaultValue="hours">
                          <SelectTrigger className="w-32">
                            <SelectValue placeholder="Select unit" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="minutes">Minutes</SelectItem>
                            <SelectItem value="hours">Hours</SelectItem>
                            <SelectItem value="days">Days</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div>
                      <Label className="mb-1 block">Message</Label>
                      <Textarea
                        defaultValue="Hi {{customer_name}}, you have items waiting in your cart. Would you like to complete your order?"
                        className="min-h-[80px]"
                      />
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end">
                  <Button variant="outline">
                    <Save className="mr-2 h-4 w-4" /> Save Rule
                  </Button>
                </CardFooter>
              </Card>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default WhatsAppBotConfig;
