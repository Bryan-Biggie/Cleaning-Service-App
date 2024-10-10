declare module 'aos' {
    const AOS: {
      init: (options?: any) => void;
      refresh: () => void;
      refreshHard: () => void;
    };
    export default AOS;

  export function init() {
    throw new Error('Function not implemented.');
  }
  }