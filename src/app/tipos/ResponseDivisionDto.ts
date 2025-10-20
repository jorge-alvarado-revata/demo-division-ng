

export interface ResponseDivisionDto {
    id: number;
    nombre: string;
    nivel: number;
    colaboradores: number;
    parent: ResponseDivisionDto | null;
    divisiones: ResponseDivisionDto[] | null;
}