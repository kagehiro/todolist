export type Priority = "High" | "Normal" | "Low"
export type Status = "Todo" | "InProgress" | "Done"
export interface TodoTask {
    name: string
    description?: string
    limit: string
    priority: Priority | null
    status: Status | null
    labels?: string[]
}
