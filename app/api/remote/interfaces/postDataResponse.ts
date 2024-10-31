interface PostDataResponse {
    success: boolean;
    data: {
      id: number;
      recipient: string;
      event: {
        id: number;
        name: string;
      };
      qrcode: {
        dataUri: string;
      };
      createdAt: string;
    };
  }