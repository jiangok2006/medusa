import { WorkflowData, createWorkflow } from "@medusajs/workflows-sdk"
import { refundPaymentStep } from "../steps/refund-payment"

export const refundPaymentWorkflowId = "refund-payment-workflow"
export const refundPaymentWorkflow = createWorkflow(
  refundPaymentWorkflowId,
  (
    input: WorkflowData<{
      payment_id: string
      created_by?: string
      amount?: number
    }>
  ) => {
    const payment = refundPaymentStep(input)
    return payment
  }
)
