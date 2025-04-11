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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  AlertCircle,
  Bell,
  CreditCard,
  Globe,
  Key,
  Languages,
  Lock,
  MessageSquare,
  Save,
  Settings,
  Shield,
  User,
  Users,
} from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const SettingsPage = () => {
  const [activeTab, setActiveTab] = useState("profile");
  const [businessName, setBusinessName] = useState("Spice Garden Restaurant");
  const [businessEmail, setBusinessEmail] = useState("contact@spicegarden.com");
  const [businessPhone, setBusinessPhone] = useState("+91 98765 43210");
  const [businessAddress, setBusinessAddress] = useState(
    "123 Food Street, Bangalore, Karnataka 560001",
  );
  const [businessDescription, setBusinessDescription] = useState(
    "Authentic Indian cuisine with a modern twist. We specialize in North Indian and South Indian delicacies.",
  );
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [orderNotifications, setOrderNotifications] = useState(true);
  const [paymentNotifications, setPaymentNotifications] = useState(true);
  const [marketingNotifications, setMarketingNotifications] = useState(false);

  return (
    <div className="container mx-auto p-6 bg-background">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold">Settings</h1>
          <p className="text-muted-foreground">
            Manage your account and application preferences
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <Card className="lg:col-span-1">
          <CardContent className="p-4">
            <div className="flex flex-col items-center space-y-4 mb-6">
              <Avatar className="h-24 w-24">
                <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=business" />
                <AvatarFallback>SG</AvatarFallback>
              </Avatar>
              <div className="text-center">
                <h3 className="font-medium">{businessName}</h3>
                <p className="text-sm text-muted-foreground">
                  Business Account
                </p>
              </div>
            </div>
            <nav className="space-y-1">
              <Button
                variant={activeTab === "profile" ? "default" : "ghost"}
                className="w-full justify-start"
                onClick={() => setActiveTab("profile")}
              >
                <User className="mr-2 h-4 w-4" />
                Business Profile
              </Button>
              <Button
                variant={activeTab === "notifications" ? "default" : "ghost"}
                className="w-full justify-start"
                onClick={() => setActiveTab("notifications")}
              >
                <Bell className="mr-2 h-4 w-4" />
                Notifications
              </Button>
              <Button
                variant={activeTab === "security" ? "default" : "ghost"}
                className="w-full justify-start"
                onClick={() => setActiveTab("security")}
              >
                <Shield className="mr-2 h-4 w-4" />
                Security
              </Button>
              <Button
                variant={activeTab === "team" ? "default" : "ghost"}
                className="w-full justify-start"
                onClick={() => setActiveTab("team")}
              >
                <Users className="mr-2 h-4 w-4" />
                Team Members
              </Button>
              <Button
                variant={activeTab === "whatsapp" ? "default" : "ghost"}
                className="w-full justify-start"
                onClick={() => setActiveTab("whatsapp")}
              >
                <MessageSquare className="mr-2 h-4 w-4" />
                WhatsApp Settings
              </Button>
              <Button
                variant={activeTab === "payment" ? "default" : "ghost"}
                className="w-full justify-start"
                onClick={() => setActiveTab("payment")}
              >
                <CreditCard className="mr-2 h-4 w-4" />
                Payment Settings
              </Button>
              <Button
                variant={activeTab === "language" ? "default" : "ghost"}
                className="w-full justify-start"
                onClick={() => setActiveTab("language")}
              >
                <Globe className="mr-2 h-4 w-4" />
                Language & Region
              </Button>
            </nav>
          </CardContent>
        </Card>

        <div className="lg:col-span-3 space-y-6">
          <TabsContent
            value="profile"
            className="mt-0"
            hidden={activeTab !== "profile"}
          >
            <Card>
              <CardHeader>
                <CardTitle>Business Profile</CardTitle>
                <CardDescription>
                  Manage your business information and public profile
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="businessName">Business Name</Label>
                    <Input
                      id="businessName"
                      value={businessName}
                      onChange={(e) => setBusinessName(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="businessEmail">Business Email</Label>
                    <Input
                      id="businessEmail"
                      type="email"
                      value={businessEmail}
                      onChange={(e) => setBusinessEmail(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="businessPhone">Business Phone</Label>
                    <Input
                      id="businessPhone"
                      value={businessPhone}
                      onChange={(e) => setBusinessPhone(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="businessCategory">Business Category</Label>
                    <Select defaultValue="restaurant">
                      <SelectTrigger id="businessCategory">
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="restaurant">Restaurant</SelectItem>
                        <SelectItem value="retail">Retail</SelectItem>
                        <SelectItem value="services">Services</SelectItem>
                        <SelectItem value="healthcare">Healthcare</SelectItem>
                        <SelectItem value="education">Education</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="businessAddress">Business Address</Label>
                  <Input
                    id="businessAddress"
                    value={businessAddress}
                    onChange={(e) => setBusinessAddress(e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="businessDescription">
                    Business Description
                  </Label>
                  <Textarea
                    id="businessDescription"
                    rows={4}
                    value={businessDescription}
                    onChange={(e) => setBusinessDescription(e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label>Business Logo</Label>
                  <div className="flex items-center space-x-4">
                    <Avatar className="h-16 w-16">
                      <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=business" />
                      <AvatarFallback>SG</AvatarFallback>
                    </Avatar>
                    <Button variant="outline" size="sm">
                      Change Logo
                    </Button>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button>
                  <Save className="mr-2 h-4 w-4" />
                  Save Changes
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent
            value="notifications"
            className="mt-0"
            hidden={activeTab !== "notifications"}
          >
            <Card>
              <CardHeader>
                <CardTitle>Notification Settings</CardTitle>
                <CardDescription>
                  Manage how you receive notifications and alerts
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Enable Notifications</h3>
                    <p className="text-sm text-muted-foreground">
                      Receive notifications about important updates
                    </p>
                  </div>
                  <Switch
                    checked={notificationsEnabled}
                    onCheckedChange={setNotificationsEnabled}
                  />
                </div>

                <Separator />

                <div className="space-y-4">
                  <h3 className="font-medium">Notification Types</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center space-x-2">
                      <Switch
                        id="orderNotifications"
                        checked={orderNotifications}
                        onCheckedChange={setOrderNotifications}
                        disabled={!notificationsEnabled}
                      />
                      <Label htmlFor="orderNotifications">
                        Order notifications
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch
                        id="paymentNotifications"
                        checked={paymentNotifications}
                        onCheckedChange={setPaymentNotifications}
                        disabled={!notificationsEnabled}
                      />
                      <Label htmlFor="paymentNotifications">
                        Payment notifications
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch
                        id="chatNotifications"
                        checked={true}
                        disabled={!notificationsEnabled}
                      />
                      <Label htmlFor="chatNotifications">
                        Chat notifications
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch
                        id="marketingNotifications"
                        checked={marketingNotifications}
                        onCheckedChange={setMarketingNotifications}
                        disabled={!notificationsEnabled}
                      />
                      <Label htmlFor="marketingNotifications">
                        Marketing notifications
                      </Label>
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h3 className="font-medium">Notification Channels</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center space-x-2">
                      <Switch
                        id="emailNotifications"
                        checked={true}
                        disabled={!notificationsEnabled}
                      />
                      <Label htmlFor="emailNotifications">Email</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch
                        id="smsNotifications"
                        checked={false}
                        disabled={!notificationsEnabled}
                      />
                      <Label htmlFor="smsNotifications">SMS</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch
                        id="pushNotifications"
                        checked={true}
                        disabled={!notificationsEnabled}
                      />
                      <Label htmlFor="pushNotifications">
                        Push notifications
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch
                        id="whatsappNotifications"
                        checked={true}
                        disabled={!notificationsEnabled}
                      />
                      <Label htmlFor="whatsappNotifications">WhatsApp</Label>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button>
                  <Save className="mr-2 h-4 w-4" />
                  Save Preferences
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent
            value="security"
            className="mt-0"
            hidden={activeTab !== "security"}
          >
            <Card>
              <CardHeader>
                <CardTitle>Security Settings</CardTitle>
                <CardDescription>
                  Manage your account security and authentication methods
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="font-medium">Change Password</h3>
                  <div className="grid grid-cols-1 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="currentPassword">Current Password</Label>
                      <Input
                        id="currentPassword"
                        type="password"
                        placeholder="Enter your current password"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="newPassword">New Password</Label>
                      <Input
                        id="newPassword"
                        type="password"
                        placeholder="Enter your new password"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="confirmPassword">Confirm Password</Label>
                      <Input
                        id="confirmPassword"
                        type="password"
                        placeholder="Confirm your new password"
                      />
                    </div>
                  </div>
                  <Button>
                    <Key className="mr-2 h-4 w-4" />
                    Update Password
                  </Button>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h3 className="font-medium">Two-Factor Authentication</h3>
                  <p className="text-sm text-muted-foreground">
                    Add an extra layer of security to your account
                  </p>
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">Enable 2FA</h4>
                      <p className="text-sm text-muted-foreground">
                        Secure your account with two-factor authentication
                      </p>
                    </div>
                    <Switch id="enable2FA" />
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h3 className="font-medium">API Access</h3>
                  <p className="text-sm text-muted-foreground">
                    Manage API keys and access tokens
                  </p>
                  <Button variant="outline">
                    <Lock className="mr-2 h-4 w-4" />
                    Manage API Keys
                  </Button>
                </div>

                <Alert>
                  <AlertCircle className="h-4 w-4" />
                  <AlertTitle>Security Tip</AlertTitle>
                  <AlertDescription>
                    We recommend using a strong, unique password and enabling
                    two-factor authentication for maximum security.
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent
            value="team"
            className="mt-0"
            hidden={activeTab !== "team"}
          >
            <Card>
              <CardHeader>
                <CardTitle>Team Members</CardTitle>
                <CardDescription>
                  Manage team members and their access permissions
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="font-medium">Team Members (3)</h3>
                  <Button size="sm">
                    <Users className="mr-2 h-4 w-4" />
                    Invite Member
                  </Button>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <Avatar>
                        <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=user1" />
                        <AvatarFallback>RS</AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-medium">Rahul Sharma</h4>
                        <p className="text-sm text-muted-foreground">
                          rahul.s@example.com
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Select defaultValue="admin">
                        <SelectTrigger className="w-[130px]">
                          <SelectValue placeholder="Select role" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="admin">Admin</SelectItem>
                          <SelectItem value="manager">Manager</SelectItem>
                          <SelectItem value="staff">Staff</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <Avatar>
                        <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=user2" />
                        <AvatarFallback>PP</AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-medium">Priya Patel</h4>
                        <p className="text-sm text-muted-foreground">
                          priya.p@example.com
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Select defaultValue="manager">
                        <SelectTrigger className="w-[130px]">
                          <SelectValue placeholder="Select role" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="admin">Admin</SelectItem>
                          <SelectItem value="manager">Manager</SelectItem>
                          <SelectItem value="staff">Staff</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <Avatar>
                        <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=user3" />
                        <AvatarFallback>AK</AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-medium">Amit Kumar</h4>
                        <p className="text-sm text-muted-foreground">
                          amit.k@example.com
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Select defaultValue="staff">
                        <SelectTrigger className="w-[130px]">
                          <SelectValue placeholder="Select role" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="admin">Admin</SelectItem>
                          <SelectItem value="manager">Manager</SelectItem>
                          <SelectItem value="staff">Staff</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button>
                  <Save className="mr-2 h-4 w-4" />
                  Save Changes
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent
            value="whatsapp"
            className="mt-0"
            hidden={activeTab !== "whatsapp"}
          >
            <Card>
              <CardHeader>
                <CardTitle>WhatsApp Settings</CardTitle>
                <CardDescription>
                  Configure your WhatsApp Business API settings
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="font-medium">WhatsApp Business Account</h3>
                  <div className="flex items-center justify-between p-4 border rounded-lg bg-muted/50">
                    <div>
                      <h4 className="font-medium">{businessName}</h4>
                      <p className="text-sm text-muted-foreground">
                        Connected: {businessPhone}
                      </p>
                    </div>
                    <Button variant="outline" size="sm">
                      Reconnect
                    </Button>
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h3 className="font-medium">Business Profile</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="whatsappDescription">About Text</Label>
                      <Input
                        id="whatsappDescription"
                        defaultValue="Authentic Indian cuisine with a modern twist"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="whatsappCategory">
                        Business Category
                      </Label>
                      <Select defaultValue="food_beverage">
                        <SelectTrigger id="whatsappCategory">
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="food_beverage">
                            Food & Beverage
                          </SelectItem>
                          <SelectItem value="retail">Retail</SelectItem>
                          <SelectItem value="services">Services</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h3 className="font-medium">Webhook Configuration</h3>
                  <div className="space-y-2">
                    <Label htmlFor="webhookUrl">Webhook URL</Label>
                    <div className="flex space-x-2">
                      <Input
                        id="webhookUrl"
                        defaultValue="https://api.yourdomain.com/whatsapp/webhook"
                        readOnly
                      />
                      <Button variant="outline" size="icon">
                        <Settings className="h-4 w-4" />
                      </Button>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      This is the URL where WhatsApp will send incoming message
                      notifications
                    </p>
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">Auto-Replies</h3>
                      <p className="text-sm text-muted-foreground">
                        Configure automatic responses for common scenarios
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="welcomeMessage">Welcome Message</Label>
                      <Textarea
                        id="welcomeMessage"
                        defaultValue="Hello! Welcome to Spice Garden. How can we assist you today?"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="awayMessage">Away Message</Label>
                      <Textarea
                        id="awayMessage"
                        defaultValue="Thank you for your message. We're currently closed and will respond when we're back."
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button>
                  <Save className="mr-2 h-4 w-4" />
                  Save WhatsApp Settings
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent
            value="payment"
            className="mt-0"
            hidden={activeTab !== "payment"}
          >
            <Card>
              <CardHeader>
                <CardTitle>Payment Settings</CardTitle>
                <CardDescription>
                  Configure payment methods and processing options
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="font-medium">Payment Gateways</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                          <CreditCard className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium">Razorpay</h4>
                          <p className="text-sm text-muted-foreground">
                            Process payments via Razorpay
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Switch defaultChecked id="razorpay" />
                        <Button variant="ghost" size="sm">
                          <Settings className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                          <CreditCard className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium">Stripe</h4>
                          <p className="text-sm text-muted-foreground">
                            Process payments via Stripe
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Switch id="stripe" />
                        <Button variant="ghost" size="sm">
                          <Settings className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                          <CreditCard className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium">UPI Direct</h4>
                          <p className="text-sm text-muted-foreground">
                            Accept UPI payments directly
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Switch defaultChecked id="upi" />
                        <Button variant="ghost" size="sm">
                          <Settings className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h3 className="font-medium">Payment Settings</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="currency">Currency</Label>
                      <Select defaultValue="inr">
                        <SelectTrigger id="currency">
                          <SelectValue placeholder="Select currency" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="inr">Indian Rupee (₹)</SelectItem>
                          <SelectItem value="usd">US Dollar ($)</SelectItem>
                          <SelectItem value="eur">Euro (€)</SelectItem>
                          <SelectItem value="gbp">British Pound (£)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="paymentExpiry">Payment Link Expiry</Label>
                      <Select defaultValue="24h">
                        <SelectTrigger id="paymentExpiry">
                          <SelectValue placeholder="Select expiry time" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1h">1 hour</SelectItem>
                          <SelectItem value="6h">6 hours</SelectItem>
                          <SelectItem value="12h">12 hours</SelectItem>
                          <SelectItem value="24h">24 hours</SelectItem>
                          <SelectItem value="48h">48 hours</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">Payment Notifications</h3>
                      <p className="text-sm text-muted-foreground">
                        Configure payment success and failure notifications
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="successMessage">Success Message</Label>
                      <Textarea
                        id="successMessage"
                        defaultValue="Thank you for your payment! Your order has been confirmed and will be processed shortly."
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="failureMessage">Failure Message</Label>
                      <Textarea
                        id="failureMessage"
                        defaultValue="We couldn't process your payment. Please try again or contact us for assistance."
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button>
                  <Save className="mr-2 h-4 w-4" />
                  Save Payment Settings
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent
            value="language"
            className="mt-0"
            hidden={activeTab !== "language"}
          >
            <Card>
              <CardHeader>
                <CardTitle>Language & Region Settings</CardTitle>
                <CardDescription>
                  Configure language preferences and regional settings
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="font-medium">Primary Language</h3>
                  <div className="space-y-2">
                    <Label htmlFor="primaryLanguage">Default Language</Label>
                    <Select defaultValue="en">
                      <SelectTrigger id="primaryLanguage">
                        <SelectValue placeholder="Select language" />
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
                    <p className="text-xs text-muted-foreground">
                      This will be the default language for your dashboard and
                      customer communications
                    </p>
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h3 className="font-medium">Supported Languages</h3>
                  <p className="text-sm text-muted-foreground">
                    Select additional languages your business supports
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center space-x-2">
                      <Switch id="lang-english" defaultChecked disabled />
                      <Label htmlFor="lang-english">English</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch id="lang-hindi" defaultChecked />
                      <Label htmlFor="lang-hindi">Hindi</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch id="lang-tamil" defaultChecked />
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
                    <div className="flex items-center space-x-2">
                      <Switch id="lang-kannada" />
                      <Label htmlFor="lang-kannada">Kannada</Label>
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h3 className="font-medium">Regional Settings</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="timezone">Timezone</Label>
                      <Select defaultValue="asia_kolkata">
                        <SelectTrigger id="timezone">
                          <SelectValue placeholder="Select timezone" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="asia_kolkata">
                            Asia/Kolkata (GMT+5:30)
                          </SelectItem>
                          <SelectItem value="asia_dubai">
                            Asia/Dubai (GMT+4:00)
                          </SelectItem>
                          <SelectItem value="europe_london">
                            Europe/London (GMT+0:00)
                          </SelectItem>
                          <SelectItem value="america_new_york">
                            America/New_York (GMT-5:00)
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="dateFormat">Date Format</Label>
                      <Select defaultValue="dd_mm_yyyy">
                        <SelectTrigger id="dateFormat">
                          <SelectValue placeholder="Select date format" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="dd_mm_yyyy">DD/MM/YYYY</SelectItem>
                          <SelectItem value="mm_dd_yyyy">MM/DD/YYYY</SelectItem>
                          <SelectItem value="yyyy_mm_dd">YYYY/MM/DD</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">
                        Auto-Detect Customer Language
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Automatically detect and respond in the customer's
                        preferred language
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button>
                  <Languages className="mr-2 h-4 w-4" />
                  Save Language Settings
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
