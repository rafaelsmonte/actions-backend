export interface Version {
    version: string;
}

export const versionModel = {
    getVersion: (): Version => {
        return { version: "1.0.1" };  
    }
};

export const versionModel2 = {
    getVersion: (): Version => {
        return { version: "1.0.1" };  
    }
};