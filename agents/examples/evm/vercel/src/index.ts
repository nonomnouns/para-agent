import { openai } from "@ai-sdk/openai";
import { generateText } from "ai";

import { http, createWalletClient } from "viem";
import { sepolia } from "viem/chains";

import { getOnChainTools } from "@para-agent/connector-vercel-ai";
import { config } from "dotenv";

config();


const walletClient = createWalletClient({
    account: account,
    transport: http(),
    chain: sepolia,
});
(async () => {
    const tools = await getOnChainTools({
        wallet: viem(walletClient),
        plugins: [
            allora({
          
            }),
        ],
    });

    const result = await generateText({
        model: openai("gpt-4o-mini"),
        tools: tools,
        maxSteps: 5,

    });

    console.log(result.text);
})();
