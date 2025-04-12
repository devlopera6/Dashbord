import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import {
  BarChart3,
  MessageSquare,
  Phone,
  Settings,
  Users,
  CreditCard,
  TrendingUp,
  ArrowUpRight,
  Download,
} from "lucide-react";
import WhatsAppSetup from "./WhatsAppSetup";
import ChatbotBuilder from "./ChatbotBuilder";
import OrderManagement from "./OrderManagement";
import PaymentManagement from "./PaymentManagement";

const Dashboard = () => {
  const [activeTab, setActiveTab] = React.useState("overview");

  // Mock data for dashboard metrics
  const metrics = {
    totalConversations: 1243,
    activeCustomers: 587,
    completedOrders: 328,
    totalRevenue: "₹43,250",
    averageResponseTime: "1m 24s",
  };

  return (
    <div className="container mx-auto p-6 bg-gradient-to-b from-background to-white">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Dashboard
          </h1>
          <p className="text-muted-foreground">
            Monitor your business performance and customer interactions
          </p>
        </div>
        <div className="flex space-x-3">
          <Button
            variant="outline"
            className="border-primary/20 hover:border-primary/40 transition-all"
          >
            <Download className="mr-2 h-4 w-4 text-primary-600" />
            Export Data
          </Button>
          <Button className="bg-gradient-premium hover:shadow-premium-hover transition-all">
            <Settings className="mr-2 h-4 w-4" />
            Settings
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
        <Card className="premium-card overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-primary"></div>
          <CardHeader className="pb-2">
            <CardDescription className="text-primary-700 font-medium">
              Total Conversations
            </CardDescription>
            <CardTitle className="text-3xl font-bold">
              {metrics.totalConversations}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center text-sm text-success font-medium">
              <ArrowUpRight className="mr-1 h-4 w-4" />
              <span>+12% from last month</span>
            </div>
          </CardContent>
        </Card>
        <Card className="premium-card overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-info"></div>
          <CardHeader className="pb-2">
            <CardDescription className="text-info font-medium">
              Active Customers
            </CardDescription>
            <CardTitle className="text-3xl font-bold">
              {metrics.activeCustomers}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center text-sm text-success font-medium">
              <ArrowUpRight className="mr-1 h-4 w-4" />
              <span>+5% from last month</span>
            </div>
          </CardContent>
        </Card>
        <Card className="premium-card overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-success"></div>
          <CardHeader className="pb-2">
            <CardDescription className="text-success font-medium">
              Completed Orders
            </CardDescription>
            <CardTitle className="text-3xl font-bold">
              {metrics.completedOrders}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center text-sm text-success font-medium">
              <ArrowUpRight className="mr-1 h-4 w-4" />
              <span>+18% from last month</span>
            </div>
          </CardContent>
        </Card>
        <Card className="premium-card overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-secondary"></div>
          <CardHeader className="pb-2">
            <CardDescription className="text-secondary font-medium">
              Total Revenue
            </CardDescription>
            <CardTitle className="text-3xl font-bold">
              {metrics.totalRevenue}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center text-sm text-success font-medium">
              <ArrowUpRight className="mr-1 h-4 w-4" />
              <span>+22% from last month</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid grid-cols-6 mb-6 bg-white/80 backdrop-blur-sm shadow-md rounded-full p-1">
          <TabsTrigger
            value="overview"
            className="rounded-full data-[state=active]:bg-gradient-primary data-[state=active]:text-white"
          >
            <BarChart3 className="mr-2 h-4 w-4" />
            Overview
          </TabsTrigger>
          <TabsTrigger
            value="whatsapp"
            className="rounded-full data-[state=active]:bg-gradient-primary data-[state=active]:text-white"
          >
            <Phone className="mr-2 h-4 w-4" />
            WhatsApp Setup
          </TabsTrigger>
          <TabsTrigger
            value="chatbot"
            className="rounded-full data-[state=active]:bg-gradient-primary data-[state=active]:text-white"
          >
            <MessageSquare className="mr-2 h-4 w-4" />
            Chatbot Builder
          </TabsTrigger>
          <TabsTrigger
            value="orders"
            className="rounded-full data-[state=active]:bg-gradient-primary data-[state=active]:text-white"
          >
            <TrendingUp className="mr-2 h-4 w-4" />
            Order Management
          </TabsTrigger>
          <TabsTrigger
            value="payments"
            className="rounded-full data-[state=active]:bg-gradient-primary data-[state=active]:text-white"
          >
            <CreditCard className="mr-2 h-4 w-4" />
            Payments
          </TabsTrigger>
          <TabsTrigger
            value="customers"
            className="rounded-full data-[state=active]:bg-gradient-primary data-[state=active]:text-white"
          >
            <Users className="mr-2 h-4 w-4" />
            Customers
          </TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-5">
          <Card className="premium-card overflow-hidden border-none shadow-premium">
            <CardHeader>
              <CardTitle className="text-xl text-primary-700">
                Performance Overview
              </CardTitle>
              <CardDescription>
                Your business performance at a glance
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] flex items-center justify-center bg-gradient-to-br from-primary-50 to-white rounded-xl">
                <p className="text-primary-600 font-medium">
                  Performance charts will appear here
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <Card className="premium-card overflow-hidden border-none">
              <CardHeader>
                <CardTitle className="text-xl text-primary-700">
                  Recent Orders
                </CardTitle>
                <CardDescription>
                  Your most recent customer orders
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="flex justify-between items-center border-b border-primary-100 pb-3 hover:bg-primary-50/50 p-2 rounded-lg transition-colors"
                    >
                      <div>
                        <div className="font-medium text-primary-800">
                          Order #{1000 + i}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Customer: John Doe
                        </div>
                      </div>
                      <div>
                        <div className="text-right font-semibold text-primary-700">
                          ₹{(Math.random() * 1000).toFixed(2)}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          2 items
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="premium-card overflow-hidden border-none">
              <CardHeader>
                <CardTitle className="text-xl text-primary-700">
                  Recent Conversations
                </CardTitle>
                <CardDescription>
                  Your most recent customer interactions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="flex justify-between items-center border-b border-primary-100 pb-3 hover:bg-primary-50/50 p-2 rounded-lg transition-colors"
                    >
                      <div>
                        <div className="font-medium text-primary-800">
                          Customer #{i}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          +91 98765 4321{i}
                        </div>
                      </div>
                      <div>
                        <div className="text-right text-sm font-medium text-primary-600">
                          2 hours ago
                        </div>
                        <div className="text-sm text-muted-foreground">
                          4 messages
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="whatsapp">
          <WhatsAppSetup />
        </TabsContent>

        <TabsContent value="chatbot">
          <ChatbotBuilder />
        </TabsContent>

        <TabsContent value="orders">
          <OrderManagement />
        </TabsContent>

        <TabsContent value="payments">
          <PaymentManagement />
        </TabsContent>

        <TabsContent value="customers" className="space-y-4">
          <Card className="premium-card overflow-hidden border-none shadow-premium">
            <CardHeader>
              <CardTitle className="text-xl text-primary-700">
                Customer Management
              </CardTitle>
              <CardDescription>
                View and manage your customer database
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[500px] flex items-center justify-center bg-gradient-to-br from-primary-50 to-white rounded-xl">
                <p className="text-primary-600 font-medium">
                  Customer management interface will appear here
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Dashboard;
