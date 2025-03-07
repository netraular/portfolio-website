---
title: TrueNAS Scale
sidebar_position: 3
description: Almacenamiento empresarial con ZFS
image: ../static/img/truenas-zfs.jpg
keywords: []
---

Breve explicación de TrueNas con enlace a la documentación principal.
Explicación propia del uso en mi home lab.
Indicar que uso truenas para gestionar un disco hdd principal de 12TB con particiones zfs.
Indicar que originalmente usaba openmediavault pero que cambié a truenas para poder dar mejor uso de zfs ya que lo prefería a el plugin de openmediavault para gestionar zfs.
Indicar que desde truenas tengo dividido el disco en diversas particiones para las diversas aplicaciones del home lab, con las particiones compartidas mediante NFS y/o SMB según convenga ya que hay casos en los que también accedo desde windows a estas.
Indicar que se ha configurado backup de las particiones aunque no se esté usando raid en el disco por el sobrecoste de tener varios discos.