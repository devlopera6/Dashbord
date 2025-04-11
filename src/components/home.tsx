import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Bell,
  MessageSquare,
  Settings,
  ShoppingCart,
  BarChart3,
  Home,
  MessageCircle,
  CreditCard,
  HelpCircle,
  LogOut,
} from "lucide-react";

const HomePage = () => {
  // Mock data for dashboard
  const businessMetrics = {
    totalOrders: 124,
    pendingOrders: 8,
    totalRevenue: "₹24,500",
    activeChats: 12,
    conversionRate: 68,
  };

  const recentOrders = [
    {
      id: "ORD-7829",
      customer: "Rahul Sharma",
      items: "Paneer Pizza x2",
      amount: "₹580",
      status: "completed",
      time: "2 hours ago",
    },
    {
      id: "ORD-7830",
      customer: "Priya Patel",
      items: "Masala Dosa x1, Coffee x1",
      amount: "₹220",
      status: "processing",
      time: "45 mins ago",
    },
    {
      id: "ORD-7831",
      customer: "Amit Kumar",
      items: "Butter Chicken x1, Naan x2",
      amount: "₹450",
      status: "pending",
      time: "12 mins ago",
    },
    {
      id: "ORD-7832",
      customer: "Sneha Reddy",
      items: "Veg Thali x2",
      amount: "₹360",
      status: "completed",
      time: "3 hours ago",
    },
  ];

  const quickActions = [
    {
      title: "Connect WhatsApp",
      description: "Link your business WhatsApp",
      icon: <MessageCircle className="h-6 w-6" />,
      path: "/dashboard/whatsapp-setup",
    },
    {
      title: "Configure Chatbot",
      description: "Set up AI responses",
      icon: <MessageSquare className="h-6 w-6" />,
      path: "/dashboard/chatbot",
    },
    {
      title: "Manage Orders",
      description: "View and process orders",
      icon: <ShoppingCart className="h-6 w-6" />,
      path: "/dashboard/orders",
    },
    {
      title: "Payment Settings",
      description: "Set up payment methods",
      icon: <CreditCard className="h-6 w-6" />,
      path: "/dashboard/payments",
    },
  ];

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar Navigation */}
      <div className="hidden md:flex w-64 flex-col fixed inset-y-0 z-50 bg-card border-r">
        <div className="flex h-14 items-center border-b px-4">
          <h2 className="text-lg font-semibold">WhatsApp Business</h2>
        </div>
        <div className="flex-1 overflow-auto py-2">
          <nav className="grid gap-1 px-2">
            <Link
              to="/"
              className="flex items-center gap-3 rounded-lg bg-accent px-3 py-2 text-accent-foreground"
            >
              <Home className="h-5 w-5" />
              <span>Dashboard</span>
            </Link>
            <Link
              to="/dashboard/whatsapp-setup"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground hover:bg-accent hover:text-accent-foreground"
            >
              <MessageCircle className="h-5 w-5" />
              <span>WhatsApp Setup</span>
            </Link>
            <Link
              to="/dashboard/chatbot"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground hover:bg-accent hover:text-accent-foreground"
            >
              <MessageSquare className="h-5 w-5" />
              <span>Chatbot</span>
            </Link>
            <Link
              to="/dashboard/orders"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground hover:bg-accent hover:text-accent-foreground"
            >
              <ShoppingCart className="h-5 w-5" />
              <span>Orders</span>
            </Link>
            <Link
              to="/dashboard/payments"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground hover:bg-accent hover:text-accent-foreground"
            >
              <CreditCard className="h-5 w-5" />
              <span>Payments</span>
            </Link>
            <Link
              to="/dashboard/analytics"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground hover:bg-accent hover:text-accent-foreground"
            >
              <BarChart3 className="h-5 w-5" />
              <span>Analytics</span>
            </Link>
            <Link
              to="/dashboard/settings"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground hover:bg-accent hover:text-accent-foreground"
            >
              <Settings className="h-5 w-5" />
              <span>Settings</span>
            </Link>
          </nav>
        </div>
        <div className="mt-auto p-4 border-t">
          <div className="flex items-center gap-3 rounded-lg px-3 py-2">
            <Avatar className="h-8 w-8">
              <AvatarImage
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=business"
                alt="Avatar"
              />
              <AvatarFallback>BP</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <span className="text-sm font-medium">Bombay Pizza</span>
              <span className="text-xs text-muted-foreground">Admin</span>
            </div>
          </div>
          <Button
            variant="ghost"
            className="w-full justify-start mt-2 text-muted-foreground"
          >
            <LogOut className="mr-2 h-4 w-4" />
            <span>Log out</span>
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col flex-1 md:pl-64">
        {/* Header */}
        <header className="sticky top-0 z-40 flex h-14 items-center gap-4 border-b bg-background px-4 sm:px-6">
          <div className="flex flex-1 items-center justify-end md:justify-end">
            <Button variant="outline" size="icon" className="mr-2">
              <Bell className="h-4 w-4" />
              <span className="sr-only">Notifications</span>
            </Button>
            <Button variant="outline" size="icon" className="mr-6">
              <HelpCircle className="h-4 w-4" />
              <span className="sr-only">Help</span>
            </Button>
            <Avatar className="h-8 w-8 md:hidden">
              <AvatarImage
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=business"
                alt="Avatar"
              />
              <AvatarFallback>BP</AvatarFallback>
            </Avatar>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="flex-1 overflow-auto p-4 sm:p-6">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
            <div className="flex items-center gap-2">
              <Button variant="outline" className="hidden md:flex">
                <HelpCircle className="mr-2 h-4 w-4" />
                <span>Help</span>
              </Button>
              <Button>
                <MessageCircle className="mr-2 h-4 w-4" />
                <span>Connect WhatsApp</span>
              </Button>
            </div>
          </div>

          {/* Business Metrics */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">
                  Total Orders
                </CardTitle>
                <ShoppingCart className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {businessMetrics.totalOrders}
                </div>
                <p className="text-xs text-muted-foreground">
                  +12% from last month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">
                  Pending Orders
                </CardTitle>
                <ShoppingCart className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {businessMetrics.pendingOrders}
                </div>
                <p className="text-xs text-muted-foreground">Needs attention</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">
                  Total Revenue
                </CardTitle>
                <CreditCard className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {businessMetrics.totalRevenue}
                </div>
                <p className="text-xs text-muted-foreground">
                  +8% from last month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">
                  Active Chats
                </CardTitle>
                <MessageCircle className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {businessMetrics.activeChats}
                </div>
                <p className="text-xs text-muted-foreground">3 need response</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            {/* Recent Orders */}
            <Card className="lg:col-span-4">
              <CardHeader>
                <CardTitle>Recent Orders</CardTitle>
                <CardDescription>
                  You have {businessMetrics.pendingOrders} orders pending
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentOrders.map((order) => (
                    <div
                      key={order.id}
                      className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0"
                    >
                      <div className="flex items-center space-x-4">
                        <div>
                          <p className="text-sm font-medium">
                            {order.customer}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {order.items}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="text-right">
                          <p className="text-sm font-medium">{order.amount}</p>
                          <p className="text-xs text-muted-foreground">
                            {order.time}
                          </p>
                        </div>
                        <Badge
                          variant={
                            order.status === "completed"
                              ? "default"
                              : order.status === "processing"
                                ? "secondary"
                                : "outline"
                          }
                        >
                          {order.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  <Link to="/dashboard/orders" className="w-full">
                    View All Orders
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Quick Actions */}
            <Card className="lg:col-span-3">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>
                  Set up your business automation
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {quickActions.map((action, index) => (
                    <Link
                      to={action.path}
                      key={index}
                      className="flex items-center space-x-4 rounded-lg border p-4 transition-all hover:bg-accent"
                    >
                      <div className="rounded-lg bg-primary/10 p-2">
                        {action.icon}
                      </div>
                      <div className="flex-1 space-y-1">
                        <p className="text-sm font-medium">{action.title}</p>
                        <p className="text-xs text-muted-foreground">
                          {action.description}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Conversion Rate */}
          <div className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Conversion Rate</CardTitle>
                <CardDescription>
                  Percentage of chats that convert to orders
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-4">
                  <div className="flex-1">
                    <Progress
                      value={businessMetrics.conversionRate}
                      className="h-2"
                    />
                  </div>
                  <div className="text-sm font-medium">
                    {businessMetrics.conversionRate}%
                  </div>
                </div>
                <div className="mt-2 text-xs text-muted-foreground">
                  +5% from last month
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
};

export default HomePage;
