export interface Task {
    title: string;
    description: string;
    priority: string;
    status: string;
    statusColor: string;
    createdOn: string;
    image: string;
  }
  
  export interface TaskStatus {
    status: string;
    percentage: number;
    color: string;
  }
  
  export interface CompletedTask {
    title: string;
    description: string;
    completedOn: string;
    image: string;
  }
  