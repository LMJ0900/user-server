import { GridColDef } from "@mui/x-data-grid"
import { ArticleColums } from "../model/article-colums"
import { Link, Typography } from "@mui/material"
import { PG } from "../../common/enums/PG"

interface CellType{
    row: ArticleColums
}

export default function ArticleColumns() : GridColDef[]{

    return [
        {
            flex: 0.04,
            minWidth: 30,
            sortable: false,
            field: 'id',
            headerName: 'ID',
            renderCell: ({row} : CellType) =>  <Typography textAlign="center" sx={{fontSize:"1.5rem"}}>  {row.id}</Typography>
            },
            {
                flex: 0.04,
                minWidth: 30,
                sortable: false,
                field: 'title',
                headerName: '제목',
                renderCell:  ({row} : CellType) =>  <Typography textAlign="center" sx={{fontSize:"1.5rem"}}>  <Link href={`${PG.ARTICLE}/detail/${row.id}`}>{row.title}
                </Link> </Typography>
            },
                {
                    flex: 0.04,
                    minWidth: 30,
                    sortable: false,
                    field: 'content',
                    headerName: '내용',
                    renderCell: ({row} : CellType) =>  <Typography textAlign="center" sx={{fontSize:"1.5rem"}}>  {row.content}</Typography>
                },
                    {
                        flex: 0.04,
                        minWidth: 30,
                        sortable: false,
                        field: 'regDate',
                        headerName: '등록일',
                        renderCell: ({row} : CellType) =>  <Typography textAlign="center" sx={{fontSize:"1.5rem"}}>  {row.regDate}</Typography>
                    },
                    {
                        flex: 0.04,
                        minWidth: 30,
                        sortable: false,
                        field: 'modDate',
                        headerName: '수정일',
                        renderCell: ({row} : CellType) =>  <Typography textAlign="center" sx={{fontSize:"1.5rem"}}>  {row.modDate}</Typography>
                    },
                    {
                        flex: 0.04,
                        minWidth: 30,
                        sortable: false,
                        field: 'writer',
                        headerName: '작가',
                        renderCell: ({row} : CellType) =>  <Typography textAlign="center" sx={{fontSize:"1.5rem"}}>  {row.writer}</Typography>
                    }
    ]
}