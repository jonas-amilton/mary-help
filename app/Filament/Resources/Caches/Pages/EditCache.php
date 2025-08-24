<?php

namespace App\Filament\Resources\Caches\Pages;

use App\Filament\Resources\Caches\CacheResource;
use Filament\Actions\DeleteAction;
use Filament\Actions\ViewAction;
use Filament\Resources\Pages\EditRecord;

class EditCache extends EditRecord
{
    protected static string $resource = CacheResource::class;

    protected function getHeaderActions(): array
    {
        return [
            ViewAction::make(),
            DeleteAction::make(),
        ];
    }
}
