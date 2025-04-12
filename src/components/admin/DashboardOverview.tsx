import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import {
  Users,
  CreditCard,
  BarChart2,
  TrendingUp,
  ArrowUpRight,
  ArrowDownRight,
  Activity,
  UserPlus,
} from "lucide-react";

const DashboardOverview = () => {
  // Mock data for admin dashboard
  const platformMetrics = {
    totalBusinesses: 124,
    activeBusinesses: 98,
    inactiveBusinesses: 26,
    totalRevenue: "₹245,500",
    monthlyRecurringRevenue: "₹78,200",
    newSignups: 18,
    conversionRate: 72,
  };

  const recentTransactions = [
    {
      id: "TRX-7829",
      business: "Spice Garden Restaurant",
      amount: "₹5,800",
      status: "completed",
      date: "2 hours ago",
      plan: "Premium",
    },
    {
      id: "TRX-7830",
      business: "Bombay Pizza",
      amount: "₹2,200",
      status: "completed",
      date: "45 mins ago",
      plan: "Basic",
    },
    {
      id: "TRX-7831",
      business: "Kirana Express",
      amount: "₹4,500",
      status: "pending",
      date: "12 mins ago",
      plan: "Premium",
    },
    {
      id: "TRX-7832",
      business: "Fashion Hub",
      amount: "₹3,600",
      status: "completed",
      date: "3 hours ago",
      plan: "Standard",
    },
    {
      id: "TRX-7833",
      business: "Tech Gadgets",
      amount: "₹7,900",
      status: "completed",
      date: "1 day ago",
      plan: "Enterprise",
    },
  ];

  const newSignups = [
    {
      id: "BIZ-1234",
      name: "Organic Grocers",
      industry: "Retail",
      date: "Today",
    },
    {
      id: "BIZ-1235",
      name: "Fitness First",
      industry: "Health & Wellness",
      date: "Yesterday",
    },
    {
      id: "BIZ-1236",
      name: "Digital Solutions",
      industry: "Technology",
      date: "2 days ago",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Admin Dashboard</h1>
        <Button>
          <UserPlus className="mr-2 h-4 w-4" />
          <span>Add Business</span>
        </Button>
      </div>

      {/* Platform Metrics */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">
              Total Businesses
            </CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {platformMetrics.totalBusinesses}
            </div>
            <div className="flex items-center pt-1">
              <ArrowUpRight className="mr-1 h-4 w-4 text-emerald-500" />
              <span className="text-xs text-emerald-500">
                +12% from last month
              </span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">
              Active / Inactive
            </CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {platformMetrics.activeBusinesses} /{" "}
              {platformMetrics.inactiveBusinesses}
            </div>
            <Progress
              value={
                (platformMetrics.activeBusinesses /
                  platformMetrics.totalBusinesses) *
                100
              }
              className="h-2 mt-2"
            />
            <p className="text-xs text-muted-foreground mt-1">
              {Math.round(
                (platformMetrics.activeBusinesses /
                  platformMetrics.totalBusinesses) *
                  100,
              )}
              % active rate
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {platformMetrics.totalRevenue}
            </div>
            <div className="flex items-center pt-1">
              <ArrowUpRight className="mr-1 h-4 w-4 text-emerald-500" />
              <span className="text-xs text-emerald-500">
                +8% from last month
              </span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">
              Monthly Recurring Revenue
            </CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {platformMetrics.monthlyRecurringRevenue}
            </div>
            <div className="flex items-center pt-1">
              <ArrowUpRight className="mr-1 h-4 w-4 text-emerald-500" />
              <span className="text-xs text-emerald-500">
                +5% from last month
              </span>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-7">
        {/* Recent Transactions */}
        <Card className="md:col-span-4">
          <CardHeader>
            <CardTitle>Recent Transactions</CardTitle>
            <CardDescription>
              Latest payment activities across the platform
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentTransactions.map((transaction) => (
                <div
                  key={transaction.id}
                  className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0"
                >
                  <div className="flex items-center space-x-4">
                    <div>
                      <p className="text-sm font-medium">
                        {transaction.business}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {transaction.id} • {transaction.plan}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="text-right">
                      <p className="text-sm font-medium">
                        {transaction.amount}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {transaction.date}
                      </p>
                    </div>
                    <Badge
                      variant={
                        transaction.status === "completed"
                          ? "default"
                          : transaction.status === "processing"
                            ? "secondary"
                            : "outline"
                      }
                    >
                      {transaction.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">
              View All Transactions
            </Button>
          </CardFooter>
        </Card>

        {/* New Signups */}
        <Card className="md:col-span-3">
          <CardHeader>
            <CardTitle>New Signups</CardTitle>
            <CardDescription>
              {platformMetrics.newSignups} new businesses in the last 7 days
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {newSignups.map((signup) => (
                <div
                  key={signup.id}
                  className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0"
                >
                  <div>
                    <p className="text-sm font-medium">{signup.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {signup.industry}
                    </p>
                  </div>
                  <Badge variant="outline">{signup.date}</Badge>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">
              View All Businesses
            </Button>
          </CardFooter>
        </Card>
      </div>

      {/* Conversion Rate */}
      <Card>
        <CardHeader>
          <CardTitle>Platform Conversion Rate</CardTitle>
          <CardDescription>
            Percentage of trial users converting to paid plans
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-4">
            <div className="flex-1">
              <Progress
                value={platformMetrics.conversionRate}
                className="h-2"
              />
            </div>
            <div className="text-sm font-medium">
              {platformMetrics.conversionRate}%
            </div>
          </div>
          <div className="mt-2 text-xs text-muted-foreground">
            +5% from last month
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardOverview;
