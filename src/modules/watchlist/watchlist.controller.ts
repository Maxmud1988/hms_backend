import { Body, Controller, Delete, Get, Patch, Post, Query, Req, UseGuards } from '@nestjs/common';
import { WatchlistService } from './watchlist.service';
import { WatchListDTO } from './dto';
import { JwtAuthGuard } from 'src/guards/jwt-guard';
import { CeateAssetResponse } from './response'
import { ApiResponse, ApiTags } from '@nestjs/swagger';



@Controller('watchlist')
export class WatchlistController {
    constructor(private readonly wathlistService: WatchlistService) { }

    @ApiTags('API')
    @ApiResponse({ status: 201, type: CeateAssetResponse })
    @UseGuards(JwtAuthGuard)
    @Post('create')
    createAsset(@Body() assetDTO: WatchListDTO, @Req() request): Promise<CeateAssetResponse> {
        const user = request.user
        return this.wathlistService.createAsset(user, assetDTO)
    }

    @ApiTags('API')
    @ApiResponse({ status: 200 })
    @UseGuards(JwtAuthGuard)
    @Delete()
    deleteAsset(@Query('id') assetId: string, @Req() request): Promise<Boolean> {
        const { id } = request.user
        return this.wathlistService.deleteAsset(id, assetId)
    }
}
