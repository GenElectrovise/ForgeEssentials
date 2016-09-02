
export function pumpkinHeadCommand(args: mc.CommandArgs) {
    var player = args.player;
    if (!args.player) {
        args.confirm('Error: no player!');
        return;
    }

    if (args.isTabCompletion) // This is important so TAB completion does not actually change stuff
        return;

    player.getInventory().setStackInSlot(39, new mc.item.ItemStack(Block.getBlock('minecraft:pumpkin'), 1));
}

Server.registerCommand({
    name: 'pumpkinhead',
    usage: '/pumpkinhead',
    permission: 'fe.commands.pumpkinhead',
    opOnly: false,
    processCommand: pumpkinHeadCommand,
    tabComplete: pumpkinHeadCommand,
});
