import { mock } from "./mock";

export function getMockJson() {
    return new Promise((resolve, reject) => {
      const timeout = () => {
        const error = new Error(
          "Internal Server error"
        );
        error.code = 500;
        resolve(mock)
      };
      setTimeout(timeout, 100);
    });
}