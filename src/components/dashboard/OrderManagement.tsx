import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import {
  Search,
  Filter,
  MoreVertical,
  MessageSquare,
  CreditCard,
  Package,
  CheckCircle,
  XCircle,
  Clock,
} from "lucide-react";

interface Order {
  id: string;
  customer: {
    name: string;
    phone: string;
    avatar?: string;
  };
  items: {
    name: string;
    quantity: number;
    price: number;
  }[];
  total: number;
  status: "new" | "processing" | "completed" | "cancelled";
  paymentStatus: "pending" | "paid" | "failed";
  date: string;
}

const OrderManagement = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);

  // Mock data for orders
  const mockOrders: Order[] = [
    {
      id: "ORD-001",
      customer: {
        name: "Rahul Sharma",
        phone: "+91 98765 43210",
        avatar: "RS",
      },
      items: [
        { name: "Paneer Pizza", quantity: 2, price: 350 },
        { name: "Garlic Bread", quantity: 1, price: 150 },
      ],
      total: 850,
      status: "new",
      paymentStatus: "pending",
      date: "2023-06-15T14:30:00",
    },
    {
      id: "ORD-002",
      customer: {
        name: "Priya Patel",
        phone: "+91 87654 32109",
        avatar: "PP",
      },
      items: [
        { name: "Masala Dosa", quantity: 3, price: 120 },
        { name: "Filter Coffee", quantity: 3, price: 60 },
      ],
      total: 540,
      status: "processing",
      paymentStatus: "paid",
      date: "2023-06-15T10:15:00",
    },
    {
      id: "ORD-003",
      customer: {
        name: "Amit Kumar",
        phone: "+91 76543 21098",
        avatar: "AK",
      },
      items: [
        { name: "Butter Chicken", quantity: 1, price: 320 },
        { name: "Naan", quantity: 4, price: 40 },
        { name: "Jeera Rice", quantity: 1, price: 150 },
      ],
      total: 630,
      status: "completed",
      paymentStatus: "paid",
      date: "2023-06-14T19:45:00",
    },
    {
      id: "ORD-004",
      customer: {
        name: "Sneha Reddy",
        phone: "+91 65432 10987",
        avatar: "SR",
      },
      items: [{ name: "Veg Biryani", quantity: 2, price: 250 }],
      total: 500,
      status: "cancelled",
      paymentStatus: "failed",
      date: "2023-06-14T12:30:00",
    },
    {
      id: "ORD-005",
      customer: {
        name: "Vikram Singh",
        phone: "+91 54321 09876",
        avatar: "VS",
      },
      items: [
        { name: "Hakka Noodles", quantity: 1, price: 180 },
        { name: "Manchurian", quantity: 1, price: 220 },
      ],
      total: 400,
      status: "new",
      paymentStatus: "pending",
      date: "2023-06-15T16:20:00",
    },
  ];

  // Filter orders based on active tab and search query
  const filteredOrders = mockOrders.filter((order) => {
    const matchesTab = activeTab === "all" || order.status === activeTab;
    const matchesSearch =
      order.customer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.id.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  // Handle order selection for detail view
  const handleOrderSelect = (order: Order) => {
    setSelectedOrder(order);
    setIsDetailModalOpen(true);
  };

  // Handle status update
  const handleStatusUpdate = (
    newStatus: "new" | "processing" | "completed" | "cancelled",
  ) => {
    if (selectedOrder) {
      // In a real app, this would make an API call to update the order status
      console.log(`Updating order ${selectedOrder.id} status to ${newStatus}`);
      // For demo purposes, we'll just close the modal
      setIsDetailModalOpen(false);
    }
  };

  // Get badge color based on status
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "new":
        return <Badge className="bg-blue-500">New</Badge>;
      case "processing":
        return <Badge className="bg-yellow-500">Processing</Badge>;
      case "completed":
        return <Badge className="bg-green-500">Completed</Badge>;
      case "cancelled":
        return <Badge className="bg-red-500">Cancelled</Badge>;
      case "pending":
        return (
          <Badge
            variant="outline"
            className="border-yellow-500 text-yellow-500"
          >
            Pending
          </Badge>
        );
      case "paid":
        return (
          <Badge variant="outline" className="border-green-500 text-green-500">
            Paid
          </Badge>
        );
      case "failed":
        return (
          <Badge variant="outline" className="border-red-500 text-red-500">
            Failed
          </Badge>
        );
      default:
        return <Badge>{status}</Badge>;
    }
  };

  return (
    <div className="bg-background p-6 h-full">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Order Management</h1>
        <div className="flex gap-2">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search orders..."
              className="pl-8 w-[250px]"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <Tabs
        defaultValue="all"
        value={activeTab}
        onValueChange={setActiveTab}
        className="w-full"
      >
        <TabsList className="mb-4">
          <TabsTrigger value="all">All Orders</TabsTrigger>
          <TabsTrigger value="new">New</TabsTrigger>
          <TabsTrigger value="processing">Processing</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
          <TabsTrigger value="cancelled">Cancelled</TabsTrigger>
        </TabsList>

        <Card>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Order ID</TableHead>
                  <TableHead>Customer</TableHead>
                  <TableHead>Items</TableHead>
                  <TableHead>Total</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Payment</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredOrders.length > 0 ? (
                  filteredOrders.map((order) => (
                    <TableRow
                      key={order.id}
                      className="cursor-pointer hover:bg-muted/50"
                      onClick={() => handleOrderSelect(order)}
                    >
                      <TableCell className="font-medium">{order.id}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Avatar className="h-8 w-8">
                            <AvatarFallback>
                              {order.customer.avatar}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-medium">
                              {order.customer.name}
                            </div>
                            <div className="text-xs text-muted-foreground">
                              {order.customer.phone}
                            </div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>{order.items.length} items</TableCell>
                      <TableCell>₹{order.total.toFixed(2)}</TableCell>
                      <TableCell>{getStatusBadge(order.status)}</TableCell>
                      <TableCell>
                        {getStatusBadge(order.paymentStatus)}
                      </TableCell>
                      <TableCell>
                        {new Date(order.date).toLocaleString("en-IN", {
                          day: "numeric",
                          month: "short",
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </TableCell>
                      <TableCell className="text-right">
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleOrderSelect(order);
                          }}
                        >
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell
                      colSpan={8}
                      className="text-center py-6 text-muted-foreground"
                    >
                      No orders found. Try adjusting your filters.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </Tabs>

      {/* Order Detail Modal */}
      <Dialog open={isDetailModalOpen} onOpenChange={setIsDetailModalOpen}>
        <DialogContent className="max-w-3xl">
          {selectedOrder && (
            <>
              <DialogHeader>
                <DialogTitle className="flex items-center gap-2">
                  Order {selectedOrder.id}
                  <span className="ml-2">
                    {getStatusBadge(selectedOrder.status)}
                  </span>
                </DialogTitle>
                <DialogDescription>
                  Placed on{" "}
                  {new Date(selectedOrder.date).toLocaleString("en-IN", {
                    dateStyle: "full",
                    timeStyle: "short",
                  })}
                </DialogDescription>
              </DialogHeader>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                <div>
                  <h3 className="text-sm font-medium mb-2">
                    Customer Information
                  </h3>
                  <Card>
                    <CardContent className="p-4">
                      <div className="flex items-center gap-3 mb-3">
                        <Avatar className="h-10 w-10">
                          <AvatarFallback>
                            {selectedOrder.customer.avatar}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium">
                            {selectedOrder.customer.name}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {selectedOrder.customer.phone}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MessageSquare className="h-4 w-4" />
                        <span>View Conversation History</span>
                      </div>
                    </CardContent>
                  </Card>

                  <h3 className="text-sm font-medium mt-4 mb-2">Order Items</h3>
                  <Card>
                    <CardContent className="p-4">
                      <ul className="space-y-2">
                        {selectedOrder.items.map((item, index) => (
                          <li key={index} className="flex justify-between">
                            <span>
                              {item.quantity} x {item.name}
                            </span>
                            <span>
                              ₹{(item.price * item.quantity).toFixed(2)}
                            </span>
                          </li>
                        ))}
                      </ul>
                      <div className="border-t mt-3 pt-3 flex justify-between font-medium">
                        <span>Total</span>
                        <span>₹{selectedOrder.total.toFixed(2)}</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div>
                  <h3 className="text-sm font-medium mb-2">
                    Payment Information
                  </h3>
                  <Card>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <CreditCard className="h-4 w-4" />
                          <span>Payment Status</span>
                        </div>
                        {getStatusBadge(selectedOrder.paymentStatus)}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {selectedOrder.paymentStatus === "paid" ? (
                          <p>
                            Payment received via UPI on{" "}
                            {new Date(selectedOrder.date).toLocaleString(
                              "en-IN",
                              {
                                day: "numeric",
                                month: "short",
                                hour: "2-digit",
                                minute: "2-digit",
                              },
                            )}
                          </p>
                        ) : selectedOrder.paymentStatus === "pending" ? (
                          <div className="flex flex-col gap-2">
                            <p>Payment link sent via WhatsApp</p>
                            <Button
                              size="sm"
                              variant="outline"
                              className="mt-1"
                            >
                              Resend Payment Link
                            </Button>
                          </div>
                        ) : (
                          <p>
                            Payment failed. Customer needs to retry payment.
                          </p>
                        )}
                      </div>
                    </CardContent>
                  </Card>

                  <h3 className="text-sm font-medium mt-4 mb-2">
                    Update Order Status
                  </h3>
                  <Card>
                    <CardContent className="p-4">
                      <Select defaultValue={selectedOrder.status}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select status" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="new">New</SelectItem>
                          <SelectItem value="processing">Processing</SelectItem>
                          <SelectItem value="completed">Completed</SelectItem>
                          <SelectItem value="cancelled">Cancelled</SelectItem>
                        </SelectContent>
                      </Select>

                      <div className="grid grid-cols-2 gap-2 mt-4">
                        <Button
                          variant="outline"
                          className="w-full"
                          onClick={() => setIsDetailModalOpen(false)}
                        >
                          Close
                        </Button>
                        <Button
                          className="w-full"
                          onClick={() =>
                            handleStatusUpdate(selectedOrder.status)
                          }
                        >
                          Update Status
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="mt-4">
                <h3 className="text-sm font-medium mb-2">Order Timeline</h3>
                <Card>
                  <CardContent className="p-4">
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="mt-0.5">
                          <Clock className="h-5 w-5 text-blue-500" />
                        </div>
                        <div>
                          <p className="font-medium">Order Received</p>
                          <p className="text-sm text-muted-foreground">
                            {new Date(selectedOrder.date).toLocaleString(
                              "en-IN",
                              {
                                day: "numeric",
                                month: "short",
                                hour: "2-digit",
                                minute: "2-digit",
                              },
                            )}
                          </p>
                        </div>
                      </div>

                      {selectedOrder.status !== "new" && (
                        <div className="flex items-start gap-3">
                          <div className="mt-0.5">
                            <Package className="h-5 w-5 text-yellow-500" />
                          </div>
                          <div>
                            <p className="font-medium">Processing Started</p>
                            <p className="text-sm text-muted-foreground">
                              {new Date(
                                new Date(selectedOrder.date).getTime() +
                                  15 * 60000,
                              ).toLocaleString("en-IN", {
                                day: "numeric",
                                month: "short",
                                hour: "2-digit",
                                minute: "2-digit",
                              })}
                            </p>
                          </div>
                        </div>
                      )}

                      {selectedOrder.status === "completed" && (
                        <div className="flex items-start gap-3">
                          <div className="mt-0.5">
                            <CheckCircle className="h-5 w-5 text-green-500" />
                          </div>
                          <div>
                            <p className="font-medium">Order Completed</p>
                            <p className="text-sm text-muted-foreground">
                              {new Date(
                                new Date(selectedOrder.date).getTime() +
                                  45 * 60000,
                              ).toLocaleString("en-IN", {
                                day: "numeric",
                                month: "short",
                                hour: "2-digit",
                                minute: "2-digit",
                              })}
                            </p>
                          </div>
                        </div>
                      )}

                      {selectedOrder.status === "cancelled" && (
                        <div className="flex items-start gap-3">
                          <div className="mt-0.5">
                            <XCircle className="h-5 w-5 text-red-500" />
                          </div>
                          <div>
                            <p className="font-medium">Order Cancelled</p>
                            <p className="text-sm text-muted-foreground">
                              {new Date(
                                new Date(selectedOrder.date).getTime() +
                                  10 * 60000,
                              ).toLocaleString("en-IN", {
                                day: "numeric",
                                month: "short",
                                hour: "2-digit",
                                minute: "2-digit",
                              })}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              Reason: Customer requested cancellation
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default OrderManagement;
