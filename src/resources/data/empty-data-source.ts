export default <IEmptyDataSource>{
    current_page: 0,
    data: [],
    first_page_url: null,
    from: 0,
    last_page: 0,
    last_page_url: null,
    next_page_url: null,
    path: null,
    per_page: 0,
    prev_page_url: null,
    to: 0,
    total: 0
}

export interface IEmptyDataSource {
    current_page: number,
    data: Array<{}>,
    first_page_url: String | null,
    from: number,
    last_page: number,
    last_page_url: String | null,
    next_page_url: String | null,
    path: String | null,
    per_page: number,
    prev_page_url: String | null,
    to: number,
    total: number
  }