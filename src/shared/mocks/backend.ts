
export interface IDataSource {
    name: string;
    description: string;
}

export interface ICube {
    name: string;
    description: string;
}

export interface IView {
    name: string;
    
    Attributes: IAttribute[];
    Measures: IMeasure[];
}

export interface IAttribute {
    name: string;
    uniqueName: string;
}

export interface IMeasure {
    name: string;
    uniqueName: string;
}

export class DatasourceApi {
    public static getDataSources(): IDataSource[] {
        const result: IDataSource[] = [
            {
                name: 'Superstore',
                description: 'Standard Superstore database'
            },
            {
                name: 'FoodMartDW',
                description: 'Famous FoodMartDW database'
            }
        ];
        return result;
    }
    public static getCubes(dataSource: IDataSource): ICube[] { 
        const result: ICube[] = [
            { name: 'Sales', description: 'Sales cube'},
            { name: 'Inventory', description: 'Inventory cube'},
        ];
        return result;
    }

    public static getViews(cube: ICube): IView[] {  
        const result: IView[] = [
            { name: 'Sales', Attributes : 
            [
                { name: 'Product', uniqueName: '[Product]' },
                { name: 'Date', uniqueName: '[Date]' },
                { name: 'Geography', uniqueName: '[Quantity]' },
            ] , 
            Measures : [
                    { name: 'Quantity', uniqueName: '[Quantity]' },
                    { name: 'Amount', uniqueName: '[Amount]' },
                ]},
            { name: 'Inventory',  Attributes : 
            [
                { name: 'Product', uniqueName: '[Product]' },
                { name: 'Date', uniqueName: '[Date]' },
                { name: 'Geography', uniqueName: '[Quantity]' },

            ], Measures: 
            [
                { name: 'Quantity', uniqueName: '[Quantity]' },
                { name: 'Amount', uniqueName: '[Amount]' },     
            ] }
            
        ];
        return result;

    }
}

