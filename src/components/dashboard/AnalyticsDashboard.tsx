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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import {
  BarChart3,
  Calendar,
  Download,
  LineChart,
  MessageSquare,
  ShoppingCart,
  Users,
} from "lucide-react";

const AnalyticsDashboard = () => {
  const [activeTab, setActiveTab] = React.useState("overview");
  const [timeRange, setTimeRange] = React.useState("7d");

  // Mock data for analytics
  const analyticsData = {
    totalConversations: 1243,
    messagesSent: 5678,
    messagesReceived: 4321,
    totalOrders: 328,
    totalRevenue: "₹43,250",
    averageOrderValue: "₹1,320",
    conversionRate: 68,
    activeCustomers: 587,
    newCustomers: 124,
    topProducts: [
      { name: "Paneer Pizza", orders: 87, revenue: "₹30,450" },
      { name: "Butter Chicken", orders: 65, revenue: "₹22,750" },
      { name: "Masala Dosa", orders: 54, revenue: "₹6,480" },
      { name: "Veg Biryani", orders: 42, revenue: "₹10,500" },
      { name: "Hakka Noodles", orders: 38, revenue: "₹6,840" },
    ],
    customerEngagement: [
      { time: "Morning (6-12)", percentage: 25 },
      { time: "Afternoon (12-4)", percentage: 30 },
      { time: "Evening (4-8)", percentage: 35 },
      { time: "Night (8-12)", percentage: 10 },
    ],
  };

  return (
    <div className="container mx-auto p-6 bg-background">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold">Analytics Dashboard</h1>
          <p className="text-muted-foreground">
            Track your business performance and customer engagement
          </p>
        </div>
        <div className="flex space-x-2">
          <Select value={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select time range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7d">Last 7 days</SelectItem>
              <SelectItem value="30d">Last 30 days</SelectItem>
              <SelectItem value="90d">Last 90 days</SelectItem>
              <SelectItem value="1y">Last year</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Total Conversations</CardDescription>
            <CardTitle className="text-2xl">
              {analyticsData.totalConversations}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-xs text-muted-foreground">
              +12% from last period
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Total Orders</CardDescription>
            <CardTitle className="text-2xl">
              {analyticsData.totalOrders}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-xs text-muted-foreground">
              +18% from last period
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Total Revenue</CardDescription>
            <CardTitle className="text-2xl">
              {analyticsData.totalRevenue}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-xs text-muted-foreground">
              +22% from last period
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Conversion Rate</CardDescription>
            <CardTitle className="text-2xl">
              {analyticsData.conversionRate}%
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-xs text-muted-foreground">
              +5% from last period
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid grid-cols-4 mb-6">
          <TabsTrigger value="overview">
            <BarChart3 className="mr-2 h-4 w-4" />
            Overview
          </TabsTrigger>
          <TabsTrigger value="conversations">
            <MessageSquare className="mr-2 h-4 w-4" />
            Conversations
          </TabsTrigger>
          <TabsTrigger value="orders">
            <ShoppingCart className="mr-2 h-4 w-4" />
            Orders
          </TabsTrigger>
          <TabsTrigger value="customers">
            <Users className="mr-2 h-4 w-4" />
            Customers
          </TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Revenue Trend</CardTitle>
                <CardDescription>
                  Your revenue performance over time
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] flex items-center justify-center bg-muted rounded-md">
                  <LineChart className="h-16 w-16 text-muted-foreground" />
                  <p className="ml-4 text-muted-foreground">
                    Revenue chart will appear here
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Order Statistics</CardTitle>
                <CardDescription>
                  Order volume and completion rates
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] flex items-center justify-center bg-muted rounded-md">
                  <BarChart3 className="h-16 w-16 text-muted-foreground" />
                  <p className="ml-4 text-muted-foreground">
                    Order statistics chart will appear here
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Top Performing Products</CardTitle>
              <CardDescription>
                Your best-selling products by order volume and revenue
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {analyticsData.topProducts.map((product, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-9 text-center">{index + 1}</div>
                    <div className="ml-2 flex-1">
                      <div className="font-medium">{product.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {product.orders} orders
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-medium">{product.revenue}</div>
                      <div className="text-sm text-muted-foreground">
                        Revenue
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="conversations" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Conversation Metrics</CardTitle>
                <CardDescription>
                  Key metrics about your WhatsApp conversations
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <div>
                      <div className="text-sm font-medium">Total Messages</div>
                      <div className="text-2xl font-bold">
                        {analyticsData.messagesSent +
                          analyticsData.messagesReceived}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm font-medium">Messages Sent</div>
                      <div className="text-2xl font-bold">
                        {analyticsData.messagesSent}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm font-medium">
                        Messages Received
                      </div>
                      <div className="text-2xl font-bold">
                        {analyticsData.messagesReceived}
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <div>Average Response Time</div>
                      <div className="font-medium">1m 24s</div>
                    </div>
                    <div className="flex justify-between text-sm">
                      <div>AI Resolution Rate</div>
                      <div className="font-medium">78%</div>
                    </div>
                    <div className="flex justify-between text-sm">
                      <div>Human Handoff Rate</div>
                      <div className="font-medium">22%</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Customer Engagement Times</CardTitle>
                <CardDescription>
                  When your customers are most active
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {analyticsData.customerEngagement.map((timeSlot, index) => (
                    <div key={index} className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <div>{timeSlot.time}</div>
                        <div className="font-medium">
                          {timeSlot.percentage}%
                        </div>
                      </div>
                      <Progress value={timeSlot.percentage} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Conversation Trends</CardTitle>
              <CardDescription>
                Message volume and engagement over time
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] flex items-center justify-center bg-muted rounded-md">
                <LineChart className="h-16 w-16 text-muted-foreground" />
                <p className="ml-4 text-muted-foreground">
                  Conversation trend chart will appear here
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="orders" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Order Metrics</CardTitle>
                <CardDescription>
                  Key metrics about your order performance
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <div>
                      <div className="text-sm font-medium">Total Orders</div>
                      <div className="text-2xl font-bold">
                        {analyticsData.totalOrders}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm font-medium">Average Value</div>
                      <div className="text-2xl font-bold">
                        {analyticsData.averageOrderValue}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm font-medium">Conversion Rate</div>
                      <div className="text-2xl font-bold">
                        {analyticsData.conversionRate}%
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <div>Completed Orders</div>
                      <div className="font-medium">92%</div>
                    </div>
                    <div className="flex justify-between text-sm">
                      <div>Cancelled Orders</div>
                      <div className="font-medium">5%</div>
                    </div>
                    <div className="flex justify-between text-sm">
                      <div>Pending Orders</div>
                      <div className="font-medium">3%</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Order Timeline</CardTitle>
                <CardDescription>Order volume by time of day</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] flex items-center justify-center bg-muted rounded-md">
                  <BarChart3 className="h-16 w-16 text-muted-foreground" />
                  <p className="ml-4 text-muted-foreground">
                    Order timeline chart will appear here
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Order Trends</CardTitle>
              <CardDescription>
                Order volume and revenue over time
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] flex items-center justify-center bg-muted rounded-md">
                <LineChart className="h-16 w-16 text-muted-foreground" />
                <p className="ml-4 text-muted-foreground">
                  Order trend chart will appear here
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="customers" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Customer Metrics</CardTitle>
                <CardDescription>
                  Key metrics about your customer base
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <div>
                      <div className="text-sm font-medium">Total Customers</div>
                      <div className="text-2xl font-bold">
                        {analyticsData.activeCustomers}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm font-medium">New Customers</div>
                      <div className="text-2xl font-bold">
                        {analyticsData.newCustomers}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm font-medium">Repeat Rate</div>
                      <div className="text-2xl font-bold">64%</div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <div>Active Customers</div>
                      <div className="font-medium">78%</div>
                    </div>
                    <div className="flex justify-between text-sm">
                      <div>Inactive Customers</div>
                      <div className="font-medium">22%</div>
                    </div>
                    <div className="flex justify-between text-sm">
                      <div>Average Orders per Customer</div>
                      <div className="font-medium">3.2</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Customer Acquisition</CardTitle>
                <CardDescription>New customer growth over time</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] flex items-center justify-center bg-muted rounded-md">
                  <LineChart className="h-16 w-16 text-muted-foreground" />
                  <p className="ml-4 text-muted-foreground">
                    Customer acquisition chart will appear here
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Customer Retention</CardTitle>
              <CardDescription>
                Customer retention and churn rates
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] flex items-center justify-center bg-muted rounded-md">
                <Users className="h-16 w-16 text-muted-foreground" />
                <p className="ml-4 text-muted-foreground">
                  Customer retention chart will appear here
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AnalyticsDashboard;
