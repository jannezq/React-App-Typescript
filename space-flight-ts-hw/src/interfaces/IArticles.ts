export interface IArticles {
  $schema: "http://json-schema.org/draft-06/schema#";
  type: "array";
  items: {
    $ref: "#/definitions/Article";
  };
  definitions: {
    Article: {
      type: "object";
      additionalProperties: false;
      properties: {
        id: {
          type: "integer";
        };
        title: {
          type: "string";
        };
        url: {
          type: "string";
          format: "uri";
          "qt-uri-protocols": ["https"];
        };
        imageUrl: {
          type: "string";
          format: "uri";
          "qt-uri-protocols": ["https"];
          "qt-uri-extensions": [".jpeg", ".jpg", ".png"];
        };
        newsSite: {
          $ref: "#/definitions/NewsSite";
        };
        summary: {
          type: "string";
        };
        publishedAt: {
          type: "string";
          format: "date-time";
        };
        updatedAt: {
          type: "string";
          format: "date-time";
        };
        featured: {
          type: "boolean";
        };
        launches: {
          type: "array";
          items: {
            $ref: "#/definitions/Launch";
          };
        };
        events: {
          type: "array";
          items: {};
        };
      };
      required: [
        "events",
        "featured",
        "id",
        "imageUrl",
        "launches",
        "newsSite",
        "publishedAt",
        "summary",
        "title",
        "updatedAt",
        "url"
      ];
      title: "Article";
    };
    Launch: {
      type: "object";
      additionalProperties: false;
      properties: {
        id: {
          type: "string";
          format: "uuid";
        };
        provider: {
          type: "string";
        };
      };
      required: ["id", "provider"];
      title: "Launch";
    };
    NewsSite: {
      type: "string";
      enum: ["SpaceNews", "Arstechnica", "Teslarati"];
      title: "NewsSite";
    };
  };
}
