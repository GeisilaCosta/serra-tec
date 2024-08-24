import React from 'react'; 
import { MegaMenu } from 'primereact/megamenu';

export function MenuProduto() {
    const items = [
        {
            label: 'Acessórios',
            icon: 'pi pi-tags',
            items: [
                [
                    {
                        label: 'Fone de Ouvido',
                        items: [{ label: 'In-ear' }, { label: 'Over-ear' }, { label: 'On-ear' }]
                    }
                ],
                [
                    {
                        label: 'Cabo HDMI',
                        items: [{ label: '1m' }, { label: '2m' }, { label: '5m' }]
                    }
                ]
            ]
        },
        {
            label: 'Fonte',
            icon: 'pi pi-plug',
            items: [
                [
                    {
                        label: 'ATX',
                        items: [{ label: '500W' }, { label: '600W' }, { label: '700W' }]
                    }
                ],
                [
                    {
                        label: 'SFX',
                        items: [{ label: '300W' }, { label: '400W' }]
                    }
                ]
            ]
        },
        {
            label: 'Memória',
            icon: 'pi pi-memory',
            items: [
                [
                    {
                        label: 'DDR4',
                        items: [{ label: '8GB' }, { label: '16GB' }, { label: '32GB' }]
                    }
                ],
                [
                    {
                        label: 'DDR5',
                        items: [{ label: '16GB' }, { label: '32GB' }]
                    }
                ]
            ]
        },
        {
            label: 'Periféricos',
            icon: 'pi pi-keyboard',
            items: [
                [
                    {
                        label: 'Teclado',
                        items: [{ label: 'Mecânico' }, { label: 'Membrana' }]
                    }
                ],
                [
                    {
                        label: 'Mouse',
                        items: [{ label: 'Com fio' }, { label: 'Sem fio' }]
                    }
                ]
            ]
        },
        {
            label: 'Placa de Vídeo',
            icon: 'pi pi-desktop',
            items: [
                [
                    {
                        label: 'NVIDIA',
                        items: [{ label: 'RTX 3060' }, { label: 'RTX 3070' }, { label: 'RTX 3080' }]
                    }
                ],
                [
                    {
                        label: 'AMD',
                        items: [{ label: 'RX 6700' }, { label: 'RX 6800' }, { label: 'RX 6900' }]
                    }
                ]
            ]
        },
        {
            label: 'Placa Mãe',
            icon: 'pi pi-server',
            items: [
                [
                    {
                        label: 'Intel',
                        items: [{ label: 'LGA 1200' }, { label: 'LGA 1700' }]
                    }
                ],
                [
                    {
                        label: 'AMD',
                        items: [{ label: 'AM4' }, { label: 'AM5' }]
                    }
                ]
            ]
        },
        {
            label: 'Processador',
            icon: 'pi pi-microchip',
            items: [
                [
                    {
                        label: 'Intel',
                        items: [{ label: 'Core i5' }, { label: 'Core i7' }, { label: 'Core i9' }]
                    }
                ],
                [
                    {
                        label: 'AMD',
                        items: [{ label: 'Ryzen 5' }, { label: 'Ryzen 7' }, { label: 'Ryzen 9' }]
                    }
                ]
            ]
        },
        {
            label: 'SSD',
            icon: 'pi pi-hdd',
            items: [
                [
                    {
                        label: 'SATA',
                        items: [{ label: '500GB' }, { label: '1TB' }]
                    }
                ],
                [
                    {
                        label: 'NVMe',
                        items: [{ label: '500GB' }, { label: '1TB' }, { label: '2TB' }]
                    }
                ]
            ]
        },
        {
            label: 'Celulares',
            icon: 'pi pi-mobile',
            items: [
                [
                    {
                        label: 'Xiaomi',
                        items: [{ label: 'Xiaomi 14 Pro' }]
                    }
                ],
                [
                    {
                        label: 'Apple',
                        items: [{ label: 'iPhone 15 Pro' }]
                    }
                ],
                [
                    {
                        label: 'Samsung',
                        items: [{ label: 'S23' }]
                    }
                ]
            ]
        }
    ];

    return (
        <div className="card">
            <MegaMenu model={items} orientation="vertical" breakpoint="960px" />
        </div>
    )
}
