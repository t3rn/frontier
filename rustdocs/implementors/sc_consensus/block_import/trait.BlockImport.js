(function() {var implementors = {};
implementors["fc_consensus"] = [{"text":"impl&lt;B, I, C&gt; BlockImport&lt;B&gt; for <a class=\"struct\" href=\"fc_consensus/struct.FrontierBlockImport.html\" title=\"struct fc_consensus::FrontierBlockImport\">FrontierBlockImport</a>&lt;B, I, C&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;B: BlockT,<br>&nbsp;&nbsp;&nbsp;&nbsp;I: BlockImport&lt;B, Transaction = TransactionFor&lt;C, B&gt;&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;I::Error: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;ConsensusError&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;C: ProvideRuntimeApi&lt;B&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + HeaderBackend&lt;B&gt; + AuxStore + BlockOf,<br>&nbsp;&nbsp;&nbsp;&nbsp;C::Api: <a class=\"trait\" href=\"fp_rpc/trait.EthereumRuntimeRPCApi.html\" title=\"trait fp_rpc::EthereumRuntimeRPCApi\">EthereumRuntimeRPCApi</a>&lt;B&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;C::Api: BlockBuilderApi&lt;B&gt;,&nbsp;</span>","synthetic":false,"types":["fc_consensus::FrontierBlockImport"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()