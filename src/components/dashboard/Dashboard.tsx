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
import { BarChart3, MessageSquare, Phone, Settings, Users } from "lucide-react";
import WhatsAppSetup from "./WhatsAppSetup";
import ChatbotBuilder from "./ChatbotBuilder";
import OrderManagement from "./OrderManagement";

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
    <div className="container mx-auto p-6 bg-background">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-muted-foreground">
            Monitor your business performance and customer interactions
          </p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline">Export Data</Button>
          <Button>
            <Settings className="mr-2 h-4 w-4" />
            Settings
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Total Conversations</CardDescription>
            <CardTitle className="text-2xl">
              {metrics.totalConversations}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-xs text-muted-foreground">
              +12% from last month
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Active Customers</CardDescription>
            <CardTitle className="text-2xl">
              {metrics.activeCustomers}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-xs text-muted-foreground">
              +5% from last month
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Completed Orders</CardDescription>
            <CardTitle className="text-2xl">
              {metrics.completedOrders}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-xs text-muted-foreground">
              +18% from last month
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Total Revenue</CardDescription>
            <CardTitle className="text-2xl">{metrics.totalRevenue}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-xs text-muted-foreground">
              +22% from last month
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid grid-cols-5 mb-6">
          <TabsTrigger value="overview">
            <BarChart3 className="mr-2 h-4 w-4" />
            Overview
          </TabsTrigger>
          <TabsTrigger value="whatsapp">
            <Phone className="mr-2 h-4 w-4" />
            WhatsApp Setup
          </TabsTrigger>
          <TabsTrigger value="chatbot">
            <MessageSquare className="mr-2 h-4 w-4" />
            Chatbot Builder
          </TabsTrigger>
          <TabsTrigger value="orders">
            <BarChart3 className="mr-2 h-4 w-4" />
            Order Management
          </TabsTrigger>
          <TabsTrigger value="customers">
            <Users className="mr-2 h-4 w-4" />
            Customers
          </TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Performance Overview</CardTitle>
              <CardDescription>
                Your business performance at a glance
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] flex items-center justify-center bg-muted rounded-md">
                <p className="text-muted-foreground">
                  Performance charts will appear here
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Recent Orders</CardTitle>
                <CardDescription>
                  Your most recent customer orders
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="flex justify-between items-center border-b pb-2"
                    >
                      <div>
                        <div className="font-medium">Order #{1000 + i}</div>
                        <div className="text-sm text-muted-foreground">
                          Customer: John Doe
                        </div>
                      </div>
                      <div>
                        <div className="text-right">
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

            <Card>
              <CardHeader>
                <CardTitle>Recent Conversations</CardTitle>
                <CardDescription>
                  Your most recent customer interactions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="flex justify-between items-center border-b pb-2"
                    >
                      <div>
                        <div className="font-medium">Customer #{i}</div>
                        <div className="text-sm text-muted-foreground">
                          +91 98765 4321{i}
                        </div>
                      </div>
                      <div>
                        <div className="text-right text-sm">2 hours ago</div>
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

        <TabsContent value="customers" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Customer Management</CardTitle>
              <CardDescription>
                View and manage your customer database
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[500px] flex items-center justify-center bg-muted rounded-md">
                <p className="text-muted-foreground">
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
