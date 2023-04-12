import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Watchlist } from './models/watchlist.model';
import { CeateAssetResponse } from './response'


@Injectable()
export class WatchlistService {
    constructor(@InjectModel(Watchlist) private readonly watchlistRepository: typeof Watchlist) {

    }

    async createAsset(user, dto): Promise<CeateAssetResponse> {
        try {
            const watchlist = {
                user: user.id,
                name: dto.name,
                assetId: dto.assetId
            }
            await this.watchlistRepository.create(watchlist)
            return watchlist
        } catch (e) {
            throw new Error(e)
        }
    }

    async deleteAsset(userID: number, assetId: string): Promise<Boolean> {
        try {
            await this.watchlistRepository.destroy({ where: { id: assetId, user: userID } })

            return true
        } catch (e) {
            throw new Error(e)
        }
    }
}
