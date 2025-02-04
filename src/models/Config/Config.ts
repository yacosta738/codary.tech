/**
 * Configuration interface for the application
 * @interface Config
 */
export interface Config {
    id: string
    brand_name: string
    title: string
    description: string
    tag_title: string
    tag_description: string
    search_title: string
    search_description: string
    footer: Footer
    social: Social[]
  }
  

/**
 * Configuration for footer section
 * @interface Footer
 */
  export interface Footer {
    links: Link[]
  }
  

/**
 * Configuration for navigation links
 * @interface Link
 */
  export interface Link {
    title: string
    url: string
  }
  

/**
 * Configuration for social media links
 * @interface Social
 */
  export interface Social {
    label: string
    icon: string
    url: string
  }
  