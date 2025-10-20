export interface CreateDivisionDto {
    nombre:        string;
    nivel:         number;
    colaboradores: number;
    embajador:     string;
    parentId?:     number;
}