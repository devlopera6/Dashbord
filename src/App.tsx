import { Suspense, lazy } from "react";
import { useRoutes, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import routes from "tempo-routes";
import DashboardLayout from "./components/dashboard/DashboardLayout";
import AdminLayout from "./components/admin/AdminLayout";

// Lazy load dashboard components
const Dashboard = lazy(() => import("./components/dashboard/Dashboard"));
const WhatsAppSetup = lazy(
  () => import("./components/dashboard/WhatsAppSetup"),
);
const ChatbotBuilder = lazy(
  () => import("./components/dashboard/ChatbotBuilder"),
);
const WhatsAppBot = lazy(() => import("./components/dashboard/WhatsAppBot"));
const OrderManagement = lazy(
  () => import("./components/dashboard/OrderManagement"),
);
const PaymentManagement = lazy(
  () => import("./components/dashboard/PaymentManagement"),
);
const AnalyticsDashboard = lazy(
  () => import("./components/dashboard/AnalyticsDashboard"),
);
const SettingsPage = lazy(() => import("./components/dashboard/SettingsPage"));
const CustomerManagement = lazy(
  () => import("./components/dashboard/CustomerManagement"),
);

// Lazy load admin components
const DashboardOverview = lazy(
  () => import("./components/admin/DashboardOverview"),
);

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="whatsapp-setup" element={<WhatsAppSetup />} />
            <Route path="chatbot" element={<ChatbotBuilder />} />
            <Route path="whatsapp-bot" element={<WhatsAppBot />} />
            <Route path="orders" element={<OrderManagement />} />
            <Route path="payments" element={<PaymentManagement />} />
            <Route path="analytics" element={<AnalyticsDashboard />} />
            <Route path="settings" element={<SettingsPage />} />
            <Route path="customers" element={<CustomerManagement />} />
          </Route>
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<DashboardOverview />} />
            {/* Other admin routes will be added in future implementations */}
          </Route>
        </Routes>
        {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
      </>
    </Suspense>
  );
}

export default App;
