declare module 'Common' {}

declare module 'Store' {
  export interface State {
    sample: Sample
  }
  export interface Sample {
    id: string
    result: any
    isLoading: boolean
  }
}
