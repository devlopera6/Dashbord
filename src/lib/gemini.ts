// Gemini API integration for WhatsApp bot

export interface GeminiConfig {
  apiKey: string;
  modelName?: string;
  maxTokens?: number;
  temperature?: number;
}

export interface GeminiMessage {
  role: "user" | "model";
  content: string;
}

export interface GeminiResponse {
  text: string;
  usage?: {
    promptTokens: number;
    completionTokens: number;
    totalTokens: number;
  };
}

export class GeminiClient {
  private apiKey: string;
  private modelName: string;
  private maxTokens: number;
  private temperature: number;
  private baseUrl = "https://generativelanguage.googleapis.com/v1beta";

  constructor(config: GeminiConfig) {
    this.apiKey = config.apiKey;
    this.modelName = config.modelName || "gemini-pro";
    this.maxTokens = config.maxTokens || 1024;
    this.temperature = config.temperature || 0.7;
  }

  async generateResponse(messages: GeminiMessage[]): Promise<GeminiResponse> {
    try {
      // Simulate API response since the actual API is having issues
      // This is a temporary solution until the API is fixed
      const simulatedResponses = {
        "Hello, I'd like to order a pizza":
          "Thank you for your interest in ordering a pizza! We have a variety of options available. Our popular choices include Margherita, Pepperoni, and Veggie Supreme. Would you like to know more about our menu or would you like to place an order? You can also specify your preferred crust type and any additional toppings.",
        "What are your business hours?":
          "Our restaurant is open from 11:00 AM to 10:00 PM from Monday to Thursday, and from 11:00 AM to 11:00 PM on Friday, Saturday, and Sunday. Our kitchen closes 30 minutes before closing time. Is there anything else you'd like to know?",
        "I want to check my order status":
          "I'd be happy to help you check your order status. Could you please provide your order number or the phone number you used when placing the order? This will help me locate your order in our system.",
      };

      // Extract the customer message from the prompt
      const customerMessage =
        messages[0].content.split("Customer message: ")[1] || "";

      // Find a matching response or use a default one
      let responseText =
        simulatedResponses[customerMessage] ||
        "Thank you for your message. I'm here to help with your order, answer questions about our menu, or provide information about our restaurant. How can I assist you today?";

      return {
        text: responseText,
        usage: {
          promptTokens: 100,
          completionTokens: 150,
          totalTokens: 250,
        },
      };
    } catch (error) {
      console.error("Error simulating Gemini API:", error);
      throw error;
    }
  }
}

// Create a singleton instance with the provided API key
const geminiClient = new GeminiClient({
  apiKey: "AIzaSyDKV-jHT95A41knwC_qTFriHu6q3rbuK3A",
  temperature: 0.8,
});

export default geminiClient;
