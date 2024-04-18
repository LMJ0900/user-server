import page from "@/app/page"
import { GridColDef } from "@mui/x-data-grid"
import { BoardColums } from "../model/board-colums"
import { Link, Typography } from "@mui/material"
import { PG } from "../../common/enums/PG"


interface CellType{
    row: BoardColums
}


export default function BoardColumns() : GridColDef[]{

    return [
        {
            flex: 0.04,
            minWidth: 30,
            sortable: false,
            field: 'id',
            headerName: 'ID',
            renderCell: ({row} : CellType) =>  <Typography textAlign="center" sx={{fontSize:"1.5rem"}}>  {row.id}</Typography>
            }
        ,
            {
                flex: 0.04,
                minWidth: 30,
                sortable: false,
                field: 'title',
                headerName: '게시판이름',
                renderCell: ({row} : CellType) =>  <Typography textAlign="center" sx={{fontSize:"1.5rem"}}>  <Link href={`${PG.BOARD}/detail/${row.id}`}>{row.title}
                </Link> </Typography>
            },
                {
                    flex: 0.04,
                    minWidth: 30,
                    sortable: false,
                    field: 'description',
                    headerName: '게시판종류',
                    renderCell:({row} : CellType) =>  <Typography textAlign="center" sx={{fontSize:"1.5rem"}}>  {row.description}</Typography>
                },
                {
                    flex: 0.04,
                    minWidth: 30,
                    sortable: false,
                    field: 'regDate',
                    headerName: '등록일',
                    renderCell:({row} : CellType) =>  <Typography textAlign="center" sx={{fontSize:"1.5rem"}}>  {row.regDate}</Typography>
                },
                {
                    flex: 0.04,
                    minWidth: 30,
                    sortable: false,
                    field: 'modDate',
                    headerName: '수정일',
                    renderCell:({row} : CellType) =>  <Typography textAlign="center" sx={{fontSize:"1.5rem"}}>  {row.modDate}</Typography>
                }
    ]
}