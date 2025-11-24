export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  graphql_public: {
    Tables: {
      [_ in never]: never
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      graphql: {
        Args: {
          extensions?: Json
          operationName?: string
          query?: string
          variables?: Json
        }
        Returns: Json
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
  public: {
    Tables: {
      config_navigation: {
        Row: {
          created_at: string
          id: string
          label_home: string
          label_login: string
          label_logout: string
          label_notice_board: string
          label_program: string
          label_register: string
          label_stream: string
          site_id: string
          use_auth: boolean
          use_home: boolean
          use_notice_board: boolean
          use_program: boolean
          use_register: boolean
          use_stream: boolean
        }
        Insert: {
          created_at?: string
          id?: string
          label_home?: string
          label_login?: string
          label_logout?: string
          label_notice_board?: string
          label_program?: string
          label_register?: string
          label_stream?: string
          site_id: string
          use_auth?: boolean
          use_home?: boolean
          use_notice_board?: boolean
          use_program?: boolean
          use_register?: boolean
          use_stream?: boolean
        }
        Update: {
          created_at?: string
          id?: string
          label_home?: string
          label_login?: string
          label_logout?: string
          label_notice_board?: string
          label_program?: string
          label_register?: string
          label_stream?: string
          site_id?: string
          use_auth?: boolean
          use_home?: boolean
          use_notice_board?: boolean
          use_program?: boolean
          use_register?: boolean
          use_stream?: boolean
        }
        Relationships: [
          {
            foreignKeyName: "config_navigation_site_id_fkey"
            columns: ["site_id"]
            isOneToOne: false
            referencedRelation: "config_site"
            referencedColumns: ["id"]
          },
        ]
      }
      config_register_form: {
        Row: {
          content: string
          created_at: string
          id: string
          is_use: boolean
          label: string
          name: string
          option: string
          order: number
          required: boolean
          site_id: string
          target: Database["public"]["Enums"]["register_field_target"]
          type: Database["public"]["Enums"]["register_field_type"]
        }
        Insert: {
          content?: string
          created_at?: string
          id?: string
          is_use?: boolean
          label?: string
          name?: string
          option?: string
          order?: number
          required?: boolean
          site_id: string
          target: Database["public"]["Enums"]["register_field_target"]
          type: Database["public"]["Enums"]["register_field_type"]
        }
        Update: {
          content?: string
          created_at?: string
          id?: string
          is_use?: boolean
          label?: string
          name?: string
          option?: string
          order?: number
          required?: boolean
          site_id?: string
          target?: Database["public"]["Enums"]["register_field_target"]
          type?: Database["public"]["Enums"]["register_field_type"]
        }
        Relationships: [
          {
            foreignKeyName: "config_register_form_site_id_fkey"
            columns: ["site_id"]
            isOneToOne: false
            referencedRelation: "config_site"
            referencedColumns: ["id"]
          },
        ]
      }
      config_site: {
        Row: {
          bg_img: string
          bg_pattern: boolean
          created_at: string
          description: string
          favicon: string
          hostname: string
          id: string
          logo: string
          organization_id: string | null
          register_ended_at: string
          register_started_at: string
          theme: Json
          thumb: string
          title: string
        }
        Insert: {
          bg_img?: string
          bg_pattern?: boolean
          created_at?: string
          description?: string
          favicon?: string
          hostname: string
          id?: string
          logo?: string
          organization_id?: string | null
          register_ended_at?: string
          register_started_at?: string
          theme?: Json
          thumb?: string
          title: string
        }
        Update: {
          bg_img?: string
          bg_pattern?: boolean
          created_at?: string
          description?: string
          favicon?: string
          hostname?: string
          id?: string
          logo?: string
          organization_id?: string | null
          register_ended_at?: string
          register_started_at?: string
          theme?: Json
          thumb?: string
          title?: string
        }
        Relationships: [
          {
            foreignKeyName: "config_site_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "list_organization"
            referencedColumns: ["id"]
          },
        ]
      }
      config_video: {
        Row: {
          created_at: string
          id: string
          is_live: boolean
          rtmps_count_hide: boolean
          rtmps_key: string
          rtmps_uid: string
          rtmps_url: string
          site_id: string
          stream_watch_ended_at: string
          stream_watch_started_at: string
          use_vod: boolean
          vod_uid: string
          vod_watch_ended_at: string
          vod_watch_started_at: string
        }
        Insert: {
          created_at?: string
          id?: string
          is_live?: boolean
          rtmps_count_hide?: boolean
          rtmps_key?: string
          rtmps_uid?: string
          rtmps_url?: string
          site_id: string
          stream_watch_ended_at?: string
          stream_watch_started_at?: string
          use_vod?: boolean
          vod_uid?: string
          vod_watch_ended_at?: string
          vod_watch_started_at?: string
        }
        Update: {
          created_at?: string
          id?: string
          is_live?: boolean
          rtmps_count_hide?: boolean
          rtmps_key?: string
          rtmps_uid?: string
          rtmps_url?: string
          site_id?: string
          stream_watch_ended_at?: string
          stream_watch_started_at?: string
          use_vod?: boolean
          vod_uid?: string
          vod_watch_ended_at?: string
          vod_watch_started_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "config_video_site_id_fkey"
            columns: ["site_id"]
            isOneToOne: false
            referencedRelation: "config_site"
            referencedColumns: ["id"]
          },
        ]
      }
      list_organization: {
        Row: {
          created_at: string
          description: string | null
          id: string
          name: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: string
          name: string
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: string
          name?: string
        }
        Relationships: []
      }
      list_profile: {
        Row: {
          created_at: string
          field_1: string | null
          field_2: string | null
          field_3: string | null
          field_4: string | null
          field_5: string | null
          field_6: string | null
          field_7: string | null
          field_8: string | null
          field_9: string | null
          id: string
          organization_id: string | null
          site_id: string | null
          updated_at: string | null
          user_id: string
          user_level: number
        }
        Insert: {
          created_at?: string
          field_1?: string | null
          field_2?: string | null
          field_3?: string | null
          field_4?: string | null
          field_5?: string | null
          field_6?: string | null
          field_7?: string | null
          field_8?: string | null
          field_9?: string | null
          id?: string
          organization_id?: string | null
          site_id?: string | null
          updated_at?: string | null
          user_id: string
          user_level?: number
        }
        Update: {
          created_at?: string
          field_1?: string | null
          field_2?: string | null
          field_3?: string | null
          field_4?: string | null
          field_5?: string | null
          field_6?: string | null
          field_7?: string | null
          field_8?: string | null
          field_9?: string | null
          id?: string
          organization_id?: string | null
          site_id?: string | null
          updated_at?: string | null
          user_id?: string
          user_level?: number
        }
        Relationships: [
          {
            foreignKeyName: "list_profile_site_id_fkey"
            columns: ["site_id"]
            isOneToOne: false
            referencedRelation: "config_site"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "profile_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "list_organization"
            referencedColumns: ["id"]
          },
        ]
      }
      log_attend: {
        Row: {
          created_at: string
          id: string
          profile_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          profile_id: string
        }
        Update: {
          created_at?: string
          id?: string
          profile_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "log_attend_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "list_profile"
            referencedColumns: ["id"]
          },
        ]
      }
      log_error: {
        Row: {
          created_at: string
          id: number
          message: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          message?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          message?: string | null
        }
        Relationships: []
      }
      log_question: {
        Row: {
          checked: boolean
          content: string
          created_at: string
          id: string
          profile_id: string
          show_to_list: boolean
          show_to_screen: boolean
          site_id: string
          target: string
        }
        Insert: {
          checked?: boolean
          content: string
          created_at?: string
          id?: string
          profile_id: string
          show_to_list?: boolean
          show_to_screen?: boolean
          site_id: string
          target: string
        }
        Update: {
          checked?: boolean
          content?: string
          created_at?: string
          id?: string
          profile_id?: string
          show_to_list?: boolean
          show_to_screen?: boolean
          site_id?: string
          target?: string
        }
        Relationships: [
          {
            foreignKeyName: "log_question_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "list_profile"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "log_question_site_id_fkey"
            columns: ["site_id"]
            isOneToOne: false
            referencedRelation: "config_site"
            referencedColumns: ["id"]
          },
        ]
      }
      log_stream_watchtime: {
        Row: {
          created_at: string
          id: string
          profile_id: string
          site_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          profile_id: string
          site_id: string
        }
        Update: {
          created_at?: string
          id?: string
          profile_id?: string
          site_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "log_stream_watchtime_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "list_profile"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "log_stream_watchtime_site_id_fkey"
            columns: ["site_id"]
            isOneToOne: false
            referencedRelation: "config_site"
            referencedColumns: ["id"]
          },
        ]
      }
      log_vod_upload: {
        Row: {
          created_at: string
          id: string
          site_id: string
          vod_uid: string
        }
        Insert: {
          created_at?: string
          id?: string
          site_id: string
          vod_uid?: string
        }
        Update: {
          created_at?: string
          id?: string
          site_id?: string
          vod_uid?: string
        }
        Relationships: [
          {
            foreignKeyName: "log_vod_upload_site_id_fkey"
            columns: ["site_id"]
            isOneToOne: false
            referencedRelation: "config_site"
            referencedColumns: ["id"]
          },
        ]
      }
      log_vod_watchtime: {
        Row: {
          created_at: string
          id: string
          profile_id: string
          site_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          profile_id: string
          site_id: string
        }
        Update: {
          created_at?: string
          id?: string
          profile_id?: string
          site_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "log_vod_watchtime_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "list_profile"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "log_vod_watchtime_site_id_fkey"
            columns: ["site_id"]
            isOneToOne: false
            referencedRelation: "config_site"
            referencedColumns: ["id"]
          },
        ]
      }
      page_home: {
        Row: {
          created_at: string
          id: string
          image_1: string
          image_2: string
          site_id: string
          use_button: boolean
        }
        Insert: {
          created_at?: string
          id?: string
          image_1?: string
          image_2?: string
          site_id: string
          use_button?: boolean
        }
        Update: {
          created_at?: string
          id?: string
          image_1?: string
          image_2?: string
          site_id?: string
          use_button?: boolean
        }
        Relationships: [
          {
            foreignKeyName: "page_home_site_id_fkey"
            columns: ["site_id"]
            isOneToOne: false
            referencedRelation: "config_site"
            referencedColumns: ["id"]
          },
        ]
      }
      page_login: {
        Row: {
          created_at: string
          id: string
          label_checkbox: string
          quill_delta: string
          quill_html: string
          site_id: string
          title: string
          use_checkbox: boolean
          use_html: boolean
          use_title: boolean
        }
        Insert: {
          created_at?: string
          id?: string
          label_checkbox?: string
          quill_delta?: string
          quill_html?: string
          site_id: string
          title?: string
          use_checkbox?: boolean
          use_html?: boolean
          use_title?: boolean
        }
        Update: {
          created_at?: string
          id?: string
          label_checkbox?: string
          quill_delta?: string
          quill_html?: string
          site_id?: string
          title?: string
          use_checkbox?: boolean
          use_html?: boolean
          use_title?: boolean
        }
        Relationships: [
          {
            foreignKeyName: "page_login_site_id_fkey"
            columns: ["site_id"]
            isOneToOne: false
            referencedRelation: "config_site"
            referencedColumns: ["id"]
          },
        ]
      }
      page_notice_board: {
        Row: {
          created_at: string
          id: string
          order: number
          quill_delta: string
          quill_html: string
          site_id: string
          title: string
        }
        Insert: {
          created_at?: string
          id?: string
          order?: number
          quill_delta?: string
          quill_html?: string
          site_id: string
          title?: string
        }
        Update: {
          created_at?: string
          id?: string
          order?: number
          quill_delta?: string
          quill_html?: string
          site_id?: string
          title?: string
        }
        Relationships: [
          {
            foreignKeyName: "page_notice_board_site_id_fkey"
            columns: ["site_id"]
            isOneToOne: false
            referencedRelation: "config_site"
            referencedColumns: ["id"]
          },
        ]
      }
      page_program: {
        Row: {
          created_at: string
          id: string
          image_1: string
          site_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          image_1?: string
          site_id: string
        }
        Update: {
          created_at?: string
          id?: string
          image_1?: string
          site_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "page_program_site_id_fkey"
            columns: ["site_id"]
            isOneToOne: false
            referencedRelation: "config_site"
            referencedColumns: ["id"]
          },
        ]
      }
      page_question_web: {
        Row: {
          bg_img_idle: string
          bg_img_show: string
          created_at: string
          font_size: number
          id: string
          question_align_center: boolean
          question_height: number
          question_width: number
          site_id: string
        }
        Insert: {
          bg_img_idle?: string
          bg_img_show?: string
          created_at?: string
          font_size?: number
          id?: string
          question_align_center?: boolean
          question_height?: number
          question_width?: number
          site_id: string
        }
        Update: {
          bg_img_idle?: string
          bg_img_show?: string
          created_at?: string
          font_size?: number
          id?: string
          question_align_center?: boolean
          question_height?: number
          question_width?: number
          site_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "page_question_web_site_id_fkey"
            columns: ["site_id"]
            isOneToOne: false
            referencedRelation: "config_site"
            referencedColumns: ["id"]
          },
        ]
      }
      page_register: {
        Row: {
          created_at: string
          id: string
          quill_delta: string
          quill_html: string
          site_id: string
          title: string
          use_html: boolean
          use_title: boolean
        }
        Insert: {
          created_at?: string
          id?: string
          quill_delta?: string
          quill_html?: string
          site_id: string
          title?: string
          use_html?: boolean
          use_title?: boolean
        }
        Update: {
          created_at?: string
          id?: string
          quill_delta?: string
          quill_html?: string
          site_id?: string
          title?: string
          use_html?: boolean
          use_title?: boolean
        }
        Relationships: [
          {
            foreignKeyName: "page_register_site_id_fkey"
            columns: ["site_id"]
            isOneToOne: false
            referencedRelation: "config_site"
            referencedColumns: ["id"]
          },
        ]
      }
      page_stream: {
        Row: {
          attend_refresh: number
          created_at: string
          file_url: string
          id: string
          label_attend: string
          label_download: string
          label_question: string
          question_targets: string
          quill_delta: string
          quill_html: string
          site_id: string
          use_attend: boolean
          use_download: boolean
          use_html: boolean
          use_question: boolean
        }
        Insert: {
          attend_refresh?: number
          created_at?: string
          file_url?: string
          id?: string
          label_attend?: string
          label_download?: string
          label_question?: string
          question_targets?: string
          quill_delta?: string
          quill_html?: string
          site_id: string
          use_attend?: boolean
          use_download?: boolean
          use_html?: boolean
          use_question?: boolean
        }
        Update: {
          attend_refresh?: number
          created_at?: string
          file_url?: string
          id?: string
          label_attend?: string
          label_download?: string
          label_question?: string
          question_targets?: string
          quill_delta?: string
          quill_html?: string
          site_id?: string
          use_attend?: boolean
          use_download?: boolean
          use_html?: boolean
          use_question?: boolean
        }
        Relationships: [
          {
            foreignKeyName: "page_stream_site_id_fkey"
            columns: ["site_id"]
            isOneToOne: false
            referencedRelation: "config_site"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      question_toggle_screen_show: {
        Args: { _id: string; _site_id: string }
        Returns: undefined
      }
    }
    Enums: {
      register_field_target:
        | "field_1"
        | "field_2"
        | "field_3"
        | "field_4"
        | "field_5"
        | "field_6"
        | "field_7"
        | "field_8"
        | "field_9"
      register_field_type:
        | "id"
        | "password"
        | "text"
        | "tel"
        | "radio"
        | "checkbox"
        | "select"
        | "confirm"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  graphql_public: {
    Enums: {},
  },
  public: {
    Enums: {
      register_field_target: [
        "field_1",
        "field_2",
        "field_3",
        "field_4",
        "field_5",
        "field_6",
        "field_7",
        "field_8",
        "field_9",
      ],
      register_field_type: [
        "id",
        "password",
        "text",
        "tel",
        "radio",
        "checkbox",
        "select",
        "confirm",
      ],
    },
  },
} as const

